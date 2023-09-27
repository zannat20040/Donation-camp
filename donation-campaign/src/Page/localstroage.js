const storedAllDonation = () =>{
    const getstores = localStorage.getItem('job-applications');
    if(getstores) {
        return JSON.parse(getstored) ;
    }
    return [];
}


const saveAllDonation = id =>{
    const getstored  = storedAllDonation();
    const isStore = getstored .find(item => item === id);
    if(!isStore){
        getstored .push(id);
        localStorage.setItem('Donation list', JSON.stringify(getstored ))
    }
}

export { saveAllDonation, storedAllDonation }