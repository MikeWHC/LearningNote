;(function(global, $){

    let Greetr = function(firstname, lastname, language){
            return new Greetr.init(firstname, lastname, language);
        },
        supportedLangs = [
            'es',
            'en',
            'zh-tw'
        ],
        greetings = {
            es: 'Hola',
            en: 'Hello',
            'zh-tw': '嗨'
        },
        formalGreetings = {
            es: 'Saludos',
            en: 'Greetings',
            'zh-tw': '你好'
        },
        logMessages = {
            es: 'Inició sesión',
            en: 'Logged in',
            'zh-tw': '已登入'
        }


    Greetr.prototype = {
        
        getFullName: function(){
            return this.firstname + ' ' + this.lastname;
        },

        validate: function(){
            
            if(supportedLangs.indexOf(this.language) === -1){
                throw 'invalid language!';
            }
        },

        greeting: function(){
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.getFullName() + '!';
        },

        greet: function(isFormal){
            let msg;

            msg = isFormal ? this.formalGreeting() : this.greeting();

            if(console) {
                console.log(msg);
            }

            return this;
        },

        log: function(){
            if(console) {
                console.log(this.firstname + ' ' + logMessages[this.language]);
            }

            return this;
        },

        setLang: function(lang){

            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, isFormal){
            if(!$){
                throw 'jQuery is not loaded';
            }

            if(!selector){
                throw 'selector is needed';
            }

            let msg;
            isFormal = isFormal || true;
            msg = isFormal ? this.formalGreeting() : this.greeting();

            $(selector).html(msg);

            return this;

        }

    };

    Greetr.init = function(firstname, lastname, language){
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';

        self.validate();
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
    
})(window, jQuery)
