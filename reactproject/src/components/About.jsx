import PageHeader from "./common/PageHeader";

const About=()=>{
return (
    <>
   <div className="aboutcss">
<PageHeader  title={<>About Me<i class="bi bi-droplet-fill"></i></>}
description={ <>
<p className="aref">My name is Aref Gaban<br/>
i am full stack-developer eager to learn new things and sharpen my knowledge and open to new work opportunities </p></>

}
/>
<p><i class="bi bi-telephone-forward-fill"> 0548308253</i>
</p>

<h2>Education</h2>
<p  className="aref">
     full stack developer degree from Hackeryou-colluge,
     Pharmacy Doctor degree,
</p>
</div>
</>

)
}



export default About;