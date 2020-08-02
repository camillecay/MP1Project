
    //AUTHENTICATION
    // var email = "camille_cay@dlsu.edu.ph";
    // var password = "abcd1234";
   

function login(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log("user signed in!");
        document.getElementById("logincontainer").style.display = 'none';
        document.getElementById("container").style.display = 'block';
        document.getElementById("navibar").style.display = 'block';
        document.getElementById("letterC").style.display = 'block';

        var user = firebase.auth().currentUser;
        if(user!=null) {
            console.log(user.email);
        }
    }).catch(function(err){
        if (err.code == "auth/wrong-password"){
            alert("Wrong Password!");
        }else{
            alert(err.message);
        }
    })
}

    document.getElementById("loginForm").addEventListener('click',function(e){
        e.preventDefault();

    });
    


function hideContent(){
    document.getElementById("container").style.display = 'none';
    document.getElementById("navibar").style.display = 'none';
    document.getElementById("letterC").style.display = 'none';
}

    // Net Ninja
    //login = function


    //user info kuha
    



// --------------------------------------------- GETTING DATA --------------------------------------------------

    let educContent = document.querySelector("#educContent")
    function renderEduc(){
        //getting data netninja

        document.getElementById("educContent").innerHTML = '';
            db.collection('educations').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    // renderEduc(doc);
                    let educ_div = document.createElement('div');
                    educ_div.classList.add("educData");
                    educ_div.setAttribute('id', doc.id);

                let Eschool = document.createElement('div');
                    Eschool.classList.add("Eschool");
                    Eschool.textContent = doc.data().school;

                let Edegree = document.createElement('div');
                    Edegree.classList.add("Edegree");
                    Edegree.textContent = doc.data().degree;

                let Eyear_start = document.createElement('div');
                    Eyear_start.classList.add("Eyear_start");
                    Eyear_start.textContent = doc.data().year_start;

                let Eyear_end = document.createElement('div');
                    Eyear_end.classList.add("Eyear_end");
                    Eyear_end.textContent = doc.data().year_end;

                let delButton = document.createElement('div');
                    delButton.classList.add("delButton");
                    delButton.textContent= 'x';
            

                educ_div.appendChild(Eschool);
                educ_div.appendChild(Edegree);       
                educ_div.appendChild(Eyear_start);
                educ_div.appendChild(Eyear_end);
                educ_div.appendChild(delButton);

                educContent.appendChild(educ_div);

                delButton.addEventListener('click', (event) => {
                    event.stopPropagation();
                    let getid = event.target.parentElement.getAttribute('id');
                    db.collection('educations').doc(getid).delete();
                    renderEduc();
                })

                })
            })
        
    }

    renderEduc();



    //get org content
    let orgContent = document.querySelector("#orgContent")
    function renderOrg(doc){
        let org_div = document.createElement('div');
            org_div.classList.add("orgData");
            org_div.setAttribute('id', doc.id);

        let Oname = document.createElement('div');
        Oname.classList.add("Oname");
        Oname.textContent = doc.data().name;

        let Oposition = document.createElement('div');
        Oposition.classList.add("Oposition");
        Oposition.textContent = doc.data().position;

        let Oyear_start = document.createElement('div');
        Oyear_start.classList.add("Oyear_start");
        Oyear_start.textContent = doc.data().year_start;

        let Oyear_end = document.createElement('div');
        Oyear_end.classList.add("Oyear_end");
        Oyear_end.textContent = doc.data().year_end;

        let delButton = document.createElement('div');
            delButton.classList.add("delButton");
            delButton.textContent= 'x';
      

            org_div.appendChild(Oname);
            org_div.appendChild(Oposition);       
            org_div.appendChild(Oyear_start);
            org_div.appendChild(Oyear_end);
            org_div.appendChild(delButton);

        orgContent.appendChild(org_div);

        delButton.addEventListener('click', (event) => {
            event.stopPropagation();
            let getid = event.target.parentElement.getAttribute('id');
            db.collection('organizations').doc(getid).delete();
        })


    }

    //getting data netninja
    db.collection('organizations').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            renderOrg(doc);
        })
    })


    // get data works

    let workContent = document.querySelector("#workContent")
    function renderWork(doc){
        let work_div = document.createElement('div');
            work_div.classList.add("workData");
            work_div.setAttribute('id', doc.id);

        let Wname = document.createElement('div');
            Wname.classList.add("Wname");
            Wname.textContent = doc.data().name;

        let Wlab = document.createElement('div');
            Wlab.classList.add("Wlab");
            Wlab.textContent = doc.data().lab;


        let Wyear_start = document.createElement('div');
            Wyear_start.classList.add("Wyear_start");
            Wyear_start.textContent = doc.data().year_start;

        let Wyear_end = document.createElement('div');
            Wyear_end.classList.add("Wyear_end");
            Wyear_end.textContent = doc.data().year_end;

        let delButton = document.createElement('div');
            delButton.classList.add("delButton");
            delButton.textContent= 'x';
      

            work_div.appendChild(Wname);
            work_div.appendChild(Wlab);       
            work_div.appendChild(Wyear_start);
            work_div.appendChild(Wyear_end);
            work_div.appendChild(delButton);

        workContent.appendChild(work_div);

        delButton.addEventListener('click', (event) => {
            event.stopPropagation();
            let getid = event.target.parentElement.getAttribute('id');
            db.collection('works').doc(getid).delete();
        })


    }

    //getting data netninja
    db.collection('works').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            renderWork(doc);
        })
    })
//-----------------------------end of work data-----------------------------------
//----------------------start of others data---------------------------------


let introContent = document.querySelector("#introContent")
function renderIntro(doc){
    let intro_div = document.createElement('div');
    intro_div.classList.add("introData");
    intro_div.setAttribute('id', doc.id);

    let intro = document.createElement('div');
        intro.classList.add("intro");
        intro.textContent = doc.data().fact;



        intro_div.appendChild(intro);


        introContent.appendChild(intro_div);



}
//getting data netninja
        db.collection('introductions').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                renderIntro(doc);
            })
        })



//------------------------------start of links data-----------------------------

           
let linkContent = document.querySelector("#linkContent")
function renderLink(doc){
    let link_div = document.createElement('div');
    link_div.classList.add("linkData");
    link_div.setAttribute('id', doc.id);

    let link = document.createElement('div');
        link.classList.add("link");
        link.textContent = doc.data().link;

        link_div.appendChild(link);
      
        linkContent.appendChild(link_div);


}
//getting data netninja
        db.collection('links').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                renderLink(doc);
            })
        })
        
 

    //-------------------------END OF GETTING DATA----------------------------------------------------------------------------
// -------------------------------------ADDING/SAVINGDATA--------------------------------------------------------------
    // //adding/saving Data
    const addEducForm = document.querySelector('#addEducForm');
    // //whenever user presses the button, this will happen
    addEducForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        db.collection('educations').add({
            school: addEducForm.educAddschool.value,
            degree: addEducForm.educAdddegree.value,
            year_start: addEducForm.educAddstart.value,
            year_end: addEducForm.educAddend.value
        }).then(function(doc){
            console.log('item added w ID: ' + doc.id);
            renderEduc();

        })
    })



    const addWorkForm = document.querySelector('#addWorkForm');
    // //whenever user presses the button, this will happen
    addWorkForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        db.collection('works').add({
            name: addWorkForm.workAddname.value,
            lab: addWorkForm.workAddlab.value,
            year_start: addWorkForm.workAddstart.value,
            year_end: addWorkForm.workAddend.value
        }).then(function(doc){
            console.log('item added w ID: ' + doc.id)
        })
    })



    const addOrgForm = document.querySelector('#addOrgForm');
    // //whenever user presses the button, this will happen
    addOrgForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        db.collection('organizations').add({
            name: addOrgForm.orgAddname.value,
            position: addOrgForm.orgAddposition.value,
            year_start: addOrgForm.orgAddstart.value,
            year_end: addOrgForm.orgAddend.value
        }).then(function(doc){
            console.log('item added w ID: ' + doc.id)
        })
    })



    // EDIT DATA

    const editIntroForm = document.querySelector('#editIntroForm');
    // //whenever user presses the button, this will happen
    editIntroForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        db.collection('introductions').add({
            fact: editIntroForm.introEditfact.value,
        }).then(function(doc){
            console.log(doc.id + " edited!")
        })
    })



    const addLinkForm = document.querySelector('#editLinkForm');
    // //whenever user presses the button, this will happen
    addLinkForm.addEventListener('button', (event) =>{
        event.reloadPage(true);
        db.collection('links').update({
            link: addLinkForm.linkEdit.value,
        }).then(function(doc){
            console.log('item added w ID: ' + doc.id)
        })
    })

// COLLAPSE BUTTON STUFF
function educopenNav() {
    document.getElementById("educsideBar").style.width = "450px";

}

function educcloseNav() {
    document.getElementById("educsideBar").style.width = "0";
  }
  
function orgopenNav() {
    document.getElementById("orgsideBar").style.width = "450px";

}

function orgcloseNav() {
    document.getElementById("orgsideBar").style.width = "0";
  }

  function workopenNav() {
    document.getElementById("worksideBar").style.width = "450px";

}

function workcloseNav() {
    document.getElementById("worksideBar").style.width = "0";
  }
  
  function introopenNav() {
    document.getElementById("introsideBar").style.width = "450px";

}

function introcloseNav() {
    document.getElementById("introsideBar").style.width = "0";
  }



  function linkopenNav() {
    document.getElementById("linksideBar").style.width = "450px";

}

function linkcloseNav() {
    document.getElementById("linksideBar").style.width = "0";
  }
  