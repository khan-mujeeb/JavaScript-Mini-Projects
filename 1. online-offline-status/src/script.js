
// initialize the ui with the current state of the user
document.getElementById('online').style.display = 'block';
document.getElementById('offline').style.display = 'none';


// Check if the user is online
window.addEventListener('online', ()=> {
    console.log('your are connectedd to the internet');
    document.getElementById('online').style.display = 'block';
    document.getElementById('offline').style.display = 'none';
})

// Check if the user is offline
window.addEventListener('offline', ()=> {
    console.log('your are not connected to the internet');
    document.getElementById('online').style.display = 'none';
    document.getElementById('offline').style.display = 'block';
})