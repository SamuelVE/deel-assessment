

# Utils

## Quick guide

### EmailReader
When using EmailReader class use the following structure in order to wait for cypress methods.

```javascript
//pass regex expression to look for in the mail body and the name of the variable where the result will be stored using TestContext
EmailReader.getMatchFromLastMail(/\d{6}/gi, 'riskMonitorOtp').then(() => {
//include here all further code
    console.log(TestContext.get('riskMonitorOtp'));
});
cy.then(() => {
    console.log('Also here');
});
```

### TestContext
Use this class to store data along the test.

```javascript
//save a variable names foo
TestContext.set('foo', 'value');
//retrieve the stored value in any method in any class
TestContext.get('foo');
```

Everytime a request is made using CallService class, the response bodies are stored in TestContext

For example, making a request with CallService which has the following response:
* GET http://localhost:3000/v1/api/users
* RESPONSE
[
   {
      "id":0,
      "name":"Juan",
      "age":21
   },
   {
      "id":1,
      "name":"Sara",
      "age":30
   }
]
```javascript
//get Sara's age
console.log(`Sara has ${TestContext.prevResponse()[1].age} years old`);
```


