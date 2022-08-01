document.querySelector("h1").style.color = "red";

Notification.requestPermission();
if(Notification.permission === "granted")
  showNotification();


function showNotification(){

    console.log("ok1");
    const notification = new Notification("Thought of the Day",{
        body: "Success is a journey not a destination."
    })
}


