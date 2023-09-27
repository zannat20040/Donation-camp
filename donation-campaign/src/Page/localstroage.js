const storedAllDonation = () =>{
    const getStore = localStorage.getItem('job-applications');
    if(getStore){
        return JSON.parse(getStore);
    }
    return [];
}


const saveAllDonation = id =>{
    const getStores = storedAllDonation();
    const isStore = getStores.find(item => item === id);
    if(!isStore){
        getStores.push(id);
        localStorage.setItem('Donation list', JSON.stringify(getStores))
    }
}

export { saveAllDonation, storedAllDonation }