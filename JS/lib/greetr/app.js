var mike = G$('Mike', 'Wu'),
    Dan;

mike.greet(true);
mike.greet(false);
mike.setLang('zh-tw').HTMLGreeting('h1#greeting');
console.log(mike);

$('select#lang').on('change', function(){
    let lang = $(this).val();
    mike.setLang(lang).HTMLGreeting('h1#greeting');
})

$('button#login').on('click', function(){
    let lang = $('select#lang').val();
    mike.setLang(lang).log();
})