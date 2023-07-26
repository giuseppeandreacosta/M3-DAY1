
        // EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
        window.onload = function () {
            document.querySelector('.blog-sidebar div:last-child li:nth-of-type(2)').remove();
        
            // EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
            const links = document.querySelectorAll(".jumbotron a,.card-text + a");
            for (const link of links){
                link.addEventListener("click",function(event){
                    event.target.parentNode.remove()})
                }
            
            
            // EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
            
            let authors = document.querySelectorAll('.blog-post-meta a');
            for (let i = 0; i < authors.length; i++) {
                authors[i].addEventListener('mouseover', function(event) {
                    alert(event.target.innerText);
                });
            }
        }


        
            