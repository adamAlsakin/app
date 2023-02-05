import React from "react";
import "./A_propos.css";
import Roll from "react-reveal/Roll";

const A_propos = () => {
  return (

    <section>
      <div className="container_prop">
        <div className="col-lg-ml-12">
          <h2>QUI SOMMES NOUS ?</h2>
          <Roll left>
          <p>Notre mission est d'agir et d'innover
            en faveur de la mobilité sociale,<br></br>
            économique et professionnelle.</p>
            </Roll>
        </div>

        <div className="col-lg-ml-12">
          
            <h2>NOTRE MISSION...</h2>
            <Roll left>
            <p><strong>Le Moment</strong> est une initiative citoyenne et entrepreneuriale visant à apporter
              des réponses à un phénomène mille fois dénoncé mais dont on ne s’occupe pas
              directement :<br>
              </br>
              La mobilité économique, sociale et professionnelle qui constitue un formidable
              levier de lutte contre les inégalités  et en faveur des valeurs de
              la République et de la laïcité et de la cohésion.</p>
          </Roll>
        </div>
        <div className="col-lg-ml-12">
        <Roll left>
          <h2>NOS PROJETS...</h2>
          <p><strong>Le mentorat</strong> <br /> Développement du mentorat pour les jeunes étudiants
            , les jeunes en emploi ou non <br /> <strong>Projet PEPITE</strong><br /> Mobilisation   et
            animation des entreprses pour favoriser l'emploi<br /><strong>Quartiers Innovants
              et entrepeunariat</strong><br /><strong>Ambassadeurs et ambassadrices du
                territoire</strong> </p>
</Roll>

        </div>

      </div>

    </section>


  );
}

export default A_propos;