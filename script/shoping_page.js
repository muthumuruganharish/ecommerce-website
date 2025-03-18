/**document.addEventListener('DOMContentLoaded', function() {
    // Get all h2 elements inside elements with class 'g1'
    const headings = document.querySelectorAll('.g1 h2');
    
    // Add click event listener to each h2
    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            // Find the closest parent with class 'g1'
            const parentG1 = this.closest('.g1');
            
            // Find the arrow element within this parent
            // This assumes each .g1 contains one of the arrow types
            const arrow = parentG1.querySelector('.down-arrow, .down-arrow2, .down-arrow3');
            
            if (arrow) {
                // Toggle the 'rotate' class on the arrow
                arrow.classList.toggle('rotate');
            }
        });
    });
}); */


document.addEventListener('DOMContentLoaded', function() {
    const g1h2=document.querySelectorAll(".g1 h2")
    g1h2.forEach(heading=>{
        heading.addEventListener("click",function(){
            
            const arrow=this.querySelector("span img.down-arrow, span img.down-arrow2, span img.down-arrow3");
            if(arrow){
                arrow.classList.toggle("rotate");
            }
      
        })

    })
})