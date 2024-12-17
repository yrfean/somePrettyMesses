import express from "express";

let app = express();

//  #Built-in level MiddleWare---

app.use(express.json());

//---

// #Application level---

app.use((req, res, next) => {
  console.log(
    "THis is Applicaion Level MiddleWare and it is declared at:",
    Date.now()
  );
  next();
});

//---

// #Router Level MiddleWare---

app.get(
  "/home",
  (req, res, next) => {
    console.log("this is middleware"); //MiddleWare
    next();
  },
  (req, res) => {
    res.send('HOMeiiii')//Handler
  }
);

//---

// #Error handling MiddleWare---

app.use((err,req,res,next)=>{
  console.log("error is:",err)
})

//---

// #Third Party MiddleWare---

//Third-party middleware refers to external libraries or modules that you can install and use to extend your Express.js application. These middleware functions are not built into Express but are provided by the community to simplify common tasks, such as logging, security, parsing, and error handling.

app.listen(3005, () => {
  console.log("listening");
});
