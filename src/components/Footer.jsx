import React from 'react'
import LogoCampo2 from '../assets/logo_Delcampo_B.png';


export default function Footer() {
    return (

        <div class="row pie-pag">
            <div class="col-lg-6 pqrs">
                <img src={LogoCampo2} width="25%" height="25%" />
            </div>
            <div class="col-lg-8 reservados">
                © Todos los derechos reservados 2021
            </div>
            <div class="col-lg-2 pqrs">
                PQRS
            </div>
        </div>
    )
}
