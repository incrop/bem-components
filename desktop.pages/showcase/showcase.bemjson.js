({
    block : 'page',
    title : 'Showcase',
    mods : { theme : 'islands' },
    head : [{ elem : 'css', url : '_showcase.css' }],
    scripts : [{ elem : 'js', url : '_showcase.js' }],
    content : [
        {
            block : 'table',
            content : [
                {
                    elem : 'row',
                    content : [
                        {
                            elem : 'cell',
                            content : {
                                block : 'button',
                                mods : { theme : 'islands', size : 's' },
                                text : 'size S'
                            }
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'checkbox-group',
                                name : 'islands',
                                mods : { theme : 'islands', size : 'l' },
                                options : [
                                    { val : 1, text : 'Small' },
                                    { val : 2, text : 'Normal', checked : true },
                                    { val : 3, text : 'Big', disabled : true },
                                    { val : 4, text : 'Beautiful', disabled : true, checked : true }
                                ]
                            }
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'input',
                                    mods : { theme : 'islands', 'has-clear' : true, size : 'l' },
                                    val : 'Find images',
                                    placeholder : 'type a question'
                                },
                                {
                                    block : 'menu',
                                    mods : { mode : 'radio', theme : 'islands', size : 'l', custom : true },
                                    content : [
                                        {
                                            block : 'menu-item',
                                            val : 1,
                                            content : 'Show on the site'
                                        },
                                        {
                                            block : 'menu-item',
                                            val : 2,
                                            content : 'Cached version'
                                        },
                                        {
                                            block : 'menu-item',
                                            mods : { checked : true },
                                            val : 3,
                                            content : 'Search in your pocket'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'select',
                                mods : { mode : 'check', theme : 'islands', size : 'l' },
                                name : 'select',
                                text : 'Language',
                                options : [
                                    { val : 1, text : 'Русский' },
                                    { val : 2, text : 'English' },
                                    { val : 3, text : 'Deutsch' },
                                    { val : 4, text : 'Português' },
                                    { val : 5, text : '中國' }
                                ]
                            }
                        }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        {
                            elem : 'cell',
                            content : {
                                block : 'button',
                                mods : { theme : 'islands', size : 'm', view : 'action' },
                                text : 'Action'
                            }
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'radio-group',
                                    name : 'islands-radios-1',
                                    mods : { theme : 'islands', size : 'l' },
                                    options : [
                                        { val : 1, text : 'Radio is off' },
                                        { val : 2, text : 'Radio is on', checked : true }
                                    ]
                                },
                                { tag : 'br' },
                                {
                                    block : 'radio-group',
                                    name : 'islands-radios-2',
                                    mods : { theme : 'islands', size : 'l' },
                                    options : [
                                        { val : 1, text : 'No, you can\'t', disabled : true },
                                        { val : 2, text : 'You have no choice', disabled : true, checked : true }
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'radio-group',
                                    name : 'islands-button',
                                    mods : { theme : 'islands', size : 'l', type : 'button' },
                                    options : [
                                        { val : 1, text : 'Black & white' },
                                        { val : 2, text : 'Colored', checked : true },
                                        { val : 3, text : 'Any colors' }
                                    ]
                                },
                                {
                                    block : 'spin-container',
                                    content : ['s', 'm', 'l', 'xl'].map(function(size) {
                                        return {
                                            block : 'spin',
                                            mods : { theme : 'islands', size : size, visible : true }
                                        };
                                    })
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'select',
                                mods : { mode : 'radio-check', theme : 'islands', size : 'l' },
                                name : 'select-radio',
                                text : 'Your mood',
                                options : [
                                    { val : 1, text : 'Bed' },
                                    { val : 2, text : 'Normal' },
                                    { val : 3, text : 'Great!' }
                                ]
                            }
                        }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        {
                            elem : 'cell',
                            content : {
                                block : 'button',
                                mods : { theme : 'islands', size : 'l', togglable : 'check' },
                                text : 'Togglable'
                            }

                        },
                        {
                            elem : 'cell',
                            content : [
                                {
                                    block : 'attach',
                                    mods : { theme : 'simple' },
                                    button : {
                                        block : 'button',
                                        mods : { theme : 'islands', size : 'm' },
                                        icon : { block : 'icon', mods : { action : 'download' } },
                                        text : 'Load image'
                                    },
                                    noFileText : 'file is not selected'
                                }
                            ]
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'textarea',
                                mods : { theme : 'islands', size : 'l' },
                                val : 'Write a review',
                                placeholder : 'nothing to say'
                            }
                        },
                        {
                            elem : 'cell',
                            content : {
                                block : 'link',
                                mods : { theme : 'islands' },
                                url : 'https://yandex.ru/yandsearch?text=good%20mood',
                                target : '_blank',
                                content : 'Link to a good mood'
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
