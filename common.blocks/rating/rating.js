modules.define('rating', ['i-bem__dom', 'control', 'keyboard__codes'],

    function(provide, BEMDOM, Control, keyCodes) {

    provide(BEMDOM.decl({ block : this.name, baseBlock : Control }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    this._elemLabels = this.findElem('label');
                    this._elemLen = this._elemLabels.length + 1; // TODO +1 -1
                    this._hoveredElem = null; // TODO check?
                    this._startMove = true;

                    this._layerWidth = 0;

                    // еще не голосовали, можно голосовать
                    // выставлять модификатор
                    this._on = true;
                }
            },

            'focused' : {
                'true' : function() {
                    this.__base.apply(this, arguments)
                        .bindToDoc('keydown', this._onKeyDown);
                },

                '' : function() {
                    this
                        .unbindFromDoc('keydown', this._onKeyDown)
                        .__base.apply(this, arguments)
                        ._removeFocusFromElem()
                        ._resetToDefault();
                }
            }

        },

        vote : function(score) {
            // TODO: вызывается при голосовании
            // с учетом прыдыдущего значения и общего количества голосов

            // this._layerWidth = ( ( (point + total) / (votes + 1) ) * this.params.size).toFixed(1);
            // this.findElem('labelCut').width(this._layerWidth);
        }

        setVal : function(score) {
            // TODO: выставляет значение score, не обращая внимания на количество голосов и предыдущие значения
            return this;
        },

        getVal : function() {
            // var val = Number(elemInput.context.value);

            // this._removeFocusFromElem();
            // this._resetToDefault();
            // this.setVal(val, 4, 1); // временно, чтобы сразу оттестить новый голос
            // this._on = false;
            // this.setMod('disabled');
            return /* текущее общее значение рейтинга */;
        },

        // _resetToDefault : function() {
        //     this._elemLen = this._elemLabels.length + 1;
        //     this._hoveredElem = null;
        //     this._startMove = true;

        //     return this;
        // },

        // _removeFocusFromElem : function() {
        //     return this.delMod(this._elemLabels.eq(this._hoveredElem), 'hovered');
        // },

        // _onKeyDown : function(e) {
        //     var keyCode = e.keyCode;

        //     this._hoveredElem !== null && (this._removeFocusFromElem());
        //     this._elemLen < 0 && (this._elemLen = this._elemLabels.length - 1);
        //     this._elemLen > this._elemLabels.length - 1 && (this._elemLen = 0);

        //     if(keyCode === keyCodes.DOWN && !e.shiftKey) {
        //         e.preventDefault();
        //         this._elemLen++;
        //     }

        //     if(keyCode === keyCodes.UP && !e.shiftKey) {
        //         !this._startMove && (this._elemLen--);
        //     }

        //     this._hoveredElem = this._elemLen - 1;
        //     this.setMod(this._elemLabels.eq(this._hoveredElem), 'hovered');
        //     this._startMove = false;

        //     if(this._on && keyCode === keyCodes.SPACE) {
        //         this._removeFocusFromElem();
        //         this.findElem('input').eq(this._hoveredElem).click();
        //         this._resetToDefault();
        //         this.setMod('disabled');
        //     }
        // }

    }, {
        live : function() {
            this.liveBindTo('input', 'click', function(e) {
               (this._on && this.vote(/* здесь число */));
            });

            return this.__base.apply(this, arguments);
        }
    }));

});
