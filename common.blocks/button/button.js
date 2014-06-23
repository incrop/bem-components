/**
 * @module button
 */

modules.define(
    'button',
    ['i-bem__dom', 'base-control', 'jquery', 'dom', 'functions', 'keyboard__codes'],
    function(provide, BEMDOM, BaseControl, $, dom, functions, keyCodes) {

/**
 * @exports
 * @class button
 * @augments base-control
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : BaseControl }, /** @lends button.prototype */{
    beforeSetMod : {
        'pressed' : {
            'true' : function() {
                return !this.hasMod('disabled') || this.hasMod('togglable');
            }
        },

        'focused' : {
            '' : function() {
                return !this._isPointerPressInProgress;
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._isPointerPressInProgress = false;
            }
        },

        'disabled' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.hasMod('togglable') || this.delMod('pressed');
            }
        }
    },

    /**
     * Returns text of the button
     * @returns {String}
     */
    getText : function() {
        return this.elem('text').text();
    },

    /**
     * Sets text to the button
     * @param {String} text
     * @returns {this}
     */
    setText : function(text) {
        this.elem('text').text(typeof text === 'undefined'? ' ' : text);
        return this;
    },

    _onFocus : function() {
        if(this._isPointerPressInProgress) return;

        this.__base.apply(this, arguments);
        this
            .bindToWin('unload', this._onUnload) // TODO: WTF???
            .bindTo('control', 'keydown', this._onKeyDown);
    },

    _onBlur : function() {
        this
            .unbindFromWin('unload', this._onUnload)
            .unbindFrom('control', 'keydown', this._onKeyDown)
            .__base.apply(this, arguments);
    },

    _onUnload : function() {
        this.delMod('focused');
    },

    _onPointerPress : function() {
        if(!this.hasMod('disabled')) {
            this._isPointerPressInProgress = true;
            this
                .bindToDoc('pointerup', this._onPointerRelease)
                .setMod('pressed');
        }
    },

    _onPointerRelease : function(e) {
        this._isPointerPressInProgress = false;
        this.unbindFromDoc('pointerup', this._onPointerRelease);

        if(dom.contains(this.elem('control'), $(e.target))) {
            this._focus();
            this
                ._updateChecked()
                .emit('click');
        } else {
            this._blur();
        }

        this.delMod('pressed');
    },

    _onKeyDown : function(e) {
        if(this.hasMod('disabled')) return;

        var keyCode = e.keyCode;
        if(keyCode === keyCodes.SPACE || keyCode === keyCodes.ENTER) {
            this
                .unbindFrom('control', 'keydown', this._onKeyDown)
                .bindTo('control', 'keyup', this._onKeyUp)
                ._updateChecked()
                .setMod('pressed');
        }
    },

    _onKeyUp : function(e) {
        this
            .unbindFrom('control', 'keyup', this._onKeyUp)
            .bindTo('control', 'keydown', this._onKeyDown)
            .delMod('pressed');

        e.keyCode === keyCodes.SPACE && this._doAction();

        this.emit('click');
    },

    _updateChecked : function() {
        this.hasMod('togglable') &&
            (this.hasMod('togglable', 'check')?
                this.toggleMod('checked') :
                this.setMod('checked'));

        return this;
    },

    _doAction : functions.noop
}, /** @lends button */{
    live : function() {
        this.liveBindTo('control', 'pointerdown', this.prototype._onPointerPress);
        return this.__base.apply(this, arguments);
    }
}));

});
