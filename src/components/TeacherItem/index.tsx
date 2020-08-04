import React from 'react'
import './style.css'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/59883018?s=400&u=645f29cd2a4e2c61fcf286ac4b5cc99ee9c9bbe6&v=4" alt=""/>
                        
                        <div>
                            <strong>Silvino Cardoso</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam cupiditate 
                        <br/>
                        perspiciatis quaerat iste quis, adipisci ea temporibus consequatur, perferendis excepturi rerum nemo omnis asperiores reprehenderit sit, fugit sunt ab?
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 200,00</strong>
                        </p>
                        <button type='button'>
                            <img src={whatsAppIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>

                </article>
    )
}

export default TeacherItem