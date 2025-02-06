describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверил, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден
   }) 

   it('Востановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   }) 

   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('Неверный логин и верный пароль',function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('getman@dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

   it('Логин без @ и верный пароль',function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('getmandolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');


    it('Приведение к строчным буквам в логине',function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
})
        
})

