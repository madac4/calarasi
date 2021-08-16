@@include('choices.min.js', {});

const region = () => {
    const region = document.querySelector('#choice');
    if (region ) {
        const regionChoice = new Choices((region), {
            searchEnabled: false,
        });
    }
}   
 



region();