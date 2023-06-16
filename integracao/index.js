    function url(params) {
        if(params){
            return "http://localhost/EquipeJambo-SQMF/api_meuDiploma/public/matriz/"+params
        }else{
            return "http://localhost/EquipeJambo-SQMF/api_meuDiploma/public/"; 
        }
     
    }



    function getAll() {
        
    

        alert('teste');

        const endpoint = url('78');             
        try {                
            
            fetch(endpoint)
            .then(response => response.json())

            .then(data => {
            console.log(data);

            })
            
            
            
                        
        } catch(e) {
            console.log(e);
        }

    }
