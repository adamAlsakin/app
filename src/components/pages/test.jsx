<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="UTF-8">
        <title>Generation Boomerang - A Propos </title>
        
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <link rel="shortcut icon" type="image/PNG" href="/favicon.png"/>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">

    
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">

                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
        
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

        <link rel="stylesheet" href="/assets/css/apropos.css">

    </head>

    <body>
        <link rel="stylesheet" href="/assets/css/a_general.css" />
<link rel="stylesheet" href="/assets/css/navbar.css" />
<link rel="stylesheet" href="/assets/css/navbarAccessibilite.css" />
<link rel="stylesheet" href="/assets/css/pole_buttons.css" />

  <div id="navAccessibilite">
  <nav class="navbar navbar-expand navbar-dark bg-dark py-0">
    <a id="accessibiliteFont" class="navbar-brand navAccess " href="/accessibilite">
      <i class="fas fa-wheelchair"></i> Accessibilité
    </a>

    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link">
          <div class="btnDys navAccess" onclick="
										
					if(getStylePropertyValue('accessibiliteFont', 'font-family') === 'Tahoma, sans-serif'){
						localStorage.setItem('dyslexique', 'true')
					}else{
						localStorage.setItem('dyslexique', 'false')
					}
					">
             <i class="fas fa-font"></i><span> Dyslexique</span>
          </div>
        </a>
        <a class="nav-item nav-link">
          <div class="btnDaltonien navAccess" onclick="
										
					if(getStylePropertyValue('accessibiliteFont', 'font-weight') === '400'){
						localStorage.removeItem('daltonien')

						localStorage.setItem('daltonien', 'true')
					}else{
						localStorage.removeItem('daltonien')

						localStorage.setItem('daltonien', 'false')
					}
					">
            <i class="fas fa-palette"></i><span> Daltonien</span>
          </div>
        </a>
        <a class="nav-item nav-link">
          <div class="btnSombre navAccess" onclick="
					if(window.getComputedStyle( document.body ,null).getPropertyValue('background-color') === 'rgb(255, 255, 255)'){
						localStorage.removeItem('sombre')
						localStorage.setItem('sombre', 'true')
					}else{
						localStorage.removeItem('sombre')
						localStorage.setItem('sombre', 'false')
					}">
            <i class="fas fa-moon"></i><span> Sombre</span>
          </div>
        </a>

        <a class="nav-item nav-link">
          <div class="navAccess" onclick="
            localStorage.setItem('sombre', 'false')
            localStorage.setItem('daltonien', 'false')
            localStorage.setItem('dyslexique', 'false')
            window.location.reload()
            ">
            <i class="fas"></i><span> Reset</span>
          </div>
        </a>
      </div>
    </div>
  </nav>
  </div>

  <div id="nav1">
        <div id="navDef1" class="px-1">
      <nav class="navbar navbar-expand-xl navbar-light text-center p-0">
        <button class="navbar-toggler dropdown-toggle" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="logo navbar-brand px-2" href="/"><img src="/img/navbar/logo4.png"
            width="200px" alt="logo" /></a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav first_nav">
                        <li class="nav-item my-auto ml-3 ml-xl-0">
              <div id="recherche" class="align-items-center m-auto">
                <input class="form-control" type="search" placeholder="Recherche" aria-label="Search" />
              </div>
            </li>

            <button id="btnSearch" class="btn mx-auto mb-2" type="submit" onclick="search()">
              <i class="fas fa-search"></i>
            </button>

                        <li class="nav-item my-auto ml-3 ml-xl-2">
              <a class="nav-link navPrincipal underline" href="/actualite">Actualite</a>
            </li>

                        <li class="nav-item dropdown my-auto ml-3 ml-xl-0 dropdown_padding">
              <a class="nav-link navPrincipal dropdown-toggle underline" id="navbarDropdownPresentation"
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Presentation
              </a>
              <div class="dropdown-menu text-left text-xl-left test" aria-labelledby="navbarDropdownPresentation">
                <a class="dropdown-item lienNoir" href="/a-propos">Notre etat d'esprit</a>
                <a class="dropdown-item lienNoir" href="/poles/presentation">Poles d'expertise</a>
              </div>
            </li>

                        <li class="nav-item dropdown my-auto ml-3 ml-xl-0 dropdown_padding">
              <a class="nav-link navPrincipal dropdown-toggle underline" id="navbarDropdown"
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Publication
              </a>
              <div class="dropdown-menu text-left text-xl-left" aria-labelledby="navbarDropdown">
                <a class="dropdown-item lienNoir" href="/experience/publications">Retours d'experience</a>
                <a class="dropdown-item lienNoir" href="/pole/articles">Articles</a>
              </div>
            </li>

                        <li class="nav-item my-auto ml-3 ml-xl-0">
              <a class="nav-link navPrincipal underline" href="/partenaire">Partenaires</a>
            </li>

                        <li class="nav-item my-auto ml-3 ml-xl-2">
              <a class="nav-link navPrincipal underline" href="/poles/faq">FAQ</a>
            </li>

                        <li class="nav-item my-auto ml-3 ml-xl-2">
              <a class="nav-link navPrincipal underline" href="/account/abonnements">Abonnement</a>
            </li>
          </ul>
        </div>

                <form class="collaspe">
          <ul class="navbar-nav">
            <li class="nav-item dropdown text-center">
                             <a class="nav-link navPrincipal dropdown-toggle underline mr-lg-5" id="navbarDropdown3" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-sign-in-alt"></i>
                <span>Connexion</span>
              </a>
              
              <div class="dropdown-menu text-right text-lg-center" aria-labelledby="navbarDropdown3">
                                <a class="dropdown-item lienNoir" href="/login"><i class="fas fa-sign-in-alt"></i> Se connecter</a>
                <a class="dropdown-item lienNoir" href="/register"><i class="fas fa-user-plus"></i> S'inscrire</a>
                              </div>
            </li>
          </ul>
        </form>
      </nav>
    </div>
  </div>
  <script src="/assets/js/script.js"></script>
  
            <link rel="stylesheet" href="/assets/css/pole_buttons.css">


    <a href="/evoMetier/index" class="btnPolefixed detailsPole1">
        <img class="logoPolefixed" src="/img/poles/cube-3d/metiers2.svg" alt="icone metier">
        <p class="btnPolefixed text_hover detailsPole1" style="color: #5762C4">Evolution des métiers</p>
    </a>

    <a href="../poles/commRechercheDev" class="btnPolefixed detailsPole2">
        <img class="logoPolefixed" src="/img/poles/cube-3d/communication2.svg" alt="icone communication">
        <p class="btnPolefixed text_hover detailsPole2" style="color: #FE8D25">Communication R&amp;D</p>
    </a>

    <a href="../poles/evolutionSavoirs" class="btnPolefixed detailsPole3">
        <img class="logoPolefixed" src="/img/poles/cube-3d/savoirs2.svg" alt="icone evolution">
        <p class="btnPolefixed text_hover detailsPole3" style="color: #FF5356">Evolution des savoirs</p>
    </a>
    

    <a href="../poles/immobilier" class="btnPolefixed detailsPole4">
        <img class="logoPolefixed" src="/img/poles/cube-3d/immobilier2.svg" alt="icone innovation">
        <p class="btnPolefixed text_hover detailsPole4" style="color: #61C855">Immobilier &amp; Silver Experience</p>
    </a>

    <a href="../poles/design" class="btnPolefixed detailsPole5">
        <img class="logoPolefixed" src="/img/poles/cube-3d/design2.svg" alt="icone metiers">
        <p class="btnPolefixed text_hover detailsPole5" style="color: #A452CB">Universal Design</p>
    </a>

    <a href="../poles/innovation" class="btnPolefixed detailsPole6">
        <img class="logoPolefixed" src="/img/poles/cube-3d/innovation2.svg" alt="icone savoirs">
        <p class="btnPolefixed text_hover detailsPole6" style="color: #FECC38">Innovation</p>
    </a>


  
        

        <div class="messageError">
                </div>

    
<!-- CONSTAT ou notre vision -->
<div class="my-5">
    <div class="mx-auto text-center">
                <h1 class="text-center my-5">Notre vision</h1>

        <p class="textAPropos">
            Il existe aujourd'hui une vraie fracture entre les aînés et les jeunes qui
            s'isolent de plus en plus. C'est pourquoi nous avons mis en place la plateforme collaborative
            <strong>«GENERATION BOOMERANG»©</strong>, afin de rassembler toutes les générations
            et d'apprendre à mieux communiquer, échanger et vivre ensemble.
        </p>
    </div>
</div>

<div class="conteneurVideo">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uz7rXpmamoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<!-- CITATION -->
<div class="focus-in-expand citationBg text-center py-3">
    <p class="h3 font-weight-bold ">"Ce qui est important ce n'est pas d'ajouter des annees a la vie, </br> mais
        d'ajouter de la vie aux annees."</p><br>
    <p class="h3 mb-5 font-weight-bold">John Fitzgerald Kennedy</p>
</div>

<div class="container">

    <!-- NOTRE PROPOSITION -->
    <div class="row my-5">
        <div class="col-12 col-lg-6">
            <img class="imgSize inline-photo show-on-scroll" src="/img/aPropos/notre-proposition.jpg"
                alt="Image de New-York">
        </div>

        <div class="col-12 col-lg-6 mt-1 pl-5 text-right">
            <h2 class="my-5">Qui sommes nous ? </h2>

            <p class="textAPropos">
                L'association Building Seniors est impliquée dans divers domaines tel que par exemple, les techniques
                liées à
                la recherche, le développement ou l’innovation.
            </p>

            <p class="textAPropos">
                Elle fût crée à l'origine afin de réfléchir à l'accompagnement des personnes dans leur parcours
                d'insertion sociale et professionnelle tout en s’appuyant sur l’expérience des ainés ainsi que
                sur les compétences des jeunes générations.
            </p>
        </div>
    </div>

  
    <!-- POUR QUI ? -->
    <div class="row my-5">
        <div class="col-12 col-lg-6 mt-1 text-left pr-5">
            <h2 class="my-5">Notre objectif</h2>

            <p class="textAPropos">
                Le partage étant au coeur de nos préoccupations, nous avons creer cette plateforme collaborative dont
                l’objectif est de crée, ainsi que de faire vivre, une communauté intergenerationnelle tout en favorisant
                les
                échanges ainsi que l'accompagnement de personnes ou de projets collectifs.
            </p>
        </div>

        <div class="col-12 col-lg-6 pl-5">
            <img class="imgSize inline-photo show-on-scroll" src="/img/aPropos/pour-qui.jpg"
                alt="Image de ---">
        </div>
    </div>
    <hr class="hrAPropos my-5">

    <!-- COMMENT ? -->
    <h1 class="text-center my-5">Comment ?</h1>
    <div class="row">
        <div class="col-12 col-lg-6">
            <img class="imgSize inline-photo show-on-scroll" src="/img/aPropos/par-linnovation.jpg"
                alt="Image de ---">
        </div>

        <div class="col-12 col-lg-6 mt-1 text-right pl-5">
            <h2 class="my-5">Par l'innovation</h2>

            <p class="textAPropos">
                Mettre l’innovation au service de tous.
                L’expérience et la vision du
                savoir au service d’une société inclusive
                pour mieux vivre ensemble.
            </p>
        </div>

        <div class="row my-5">
            <div class="col-12 col-lg-6 mt-1 text-left pr-5 pl-4">
                <h2 class="mt-5">Par l'acces numerique</h2>

                <p class="textAPropos">
                    Faire du numérique la passerelle entre
                    le savoir des aînés et les compétences
                    des nouvelles générations grâce au portail
                    <strong>«GENERATION BOOMERANG»©</strong>
                </p>
            </div>

            <div class="col-lg-6 pl-5">
                <img class="imgSize inline-photo show-on-scroll"
                    src="/img/aPropos/par-lacces-numerique.jpg" alt="Image de ---">
            </div>
        </div>
    </div>
</div>
</div>

<!-- NOTRE MISSION ? -->
<div class="row no-gutters">
    <div class="col-12 sectionMission p-4">
        <div class="row left-center">
            <div class="col-12 col-lg-6 text-center">
                <p class="h2 titreMission mb-3">
                    <strong>Association Building Seniors</strong><br>
                    Notre mission
                </p>

                <div class="row text-center ">
                    <div class="col-12 col-lg-4 textMission">
                        <img class="mx-auto my-3 img-fluid" src="/img/icones/smartphone.svg" width="150px"
                            alt="Icone d'une main qui tient un mobile">
                        <p class="font-weight-bold ">Générer du lien social grâce au numérique.</p>
                    </div>

                    <div class="col-12 col-lg-4 textMission">
                        <img class="mx-auto my-3 img-fluid" src="/img/icones/save-energy.svg"
                            width="150px" alt="Icone de deux mains qui tienne une representation d'énergie">
                        <p class="font-weight-bold ">Fédérer les énergies pour accompagner la prévention sur l'ensemble
                            de la population.</p>
                    </div>

                    <div class="col-12 col-lg-4 textMission ">
                        <img class="mx-auto my-3 img-fluid" src="/img/icones/discussion.svg" width="150px"
                            alt="Icone d'un mobile " srcset="">
                        <p class="font-weight-bold">Ouvrir un nouvel espace en utilisant le savoir-faire des seniors et
                            les compétences des jeunes générations.</p>
                    </div>
                </div>
            </div>
        </div>

            </div>
</div>

<!-- L'ÉQUIPE -->
<div class="sectionEquipe p-4">
    <h2 class="text-center font-weight-bold">L'equipe</h2>

    <div class="container mt-5">
        <ul class="row one text-center">
            <div class="col-12 col-lg-4">
                <li>
                    <div class="wrapper transition"> <img class="transition"
                            src="/img/poles/experts/patrick.jpg" alt="Patrick Vignon">
                        <ul class="social">
                            <li>Révolution numérique, progression par l'innovation</li>
                            <li><a class="transition" href="#"><img src="/img/iconePole/innovation.png"
                                        alt="pole Inovation"></a></li>
                            <li><a class="transition" href="#"><img
                                        src="http://dooreight.com/codepen/people/behance.svg" alt="behance"></a></li>
                            <li><a class="transition" href="#"><img
                                        src="http://dooreight.com/codepen/people/facebook.svg" alt="facebook"></a></li>
                            <li><a class="transition" href="#"><img src="http://dooreight.com/codepen/people/skype.svg"
                                        alt="skype"></a></li>
                        </ul>
                        <span class="transition" id="couleur_innovation">
                            <h3>Patrick Vrignon<em>Innovation &amp; Nouvelles technos</em></h3>
                            <i class="fas fa-angle-down" style="font-size: 3em;color:white"></i>
                        </span>
                    </div>
                </li>
            </div>

            <div class="col-12 col-lg-4">
                <li>
                    <div class="wrapper transition"><img class="transition"
                            src="/img/poles/experts/xavierMini.png" alt="Xavier Tournillon">
                        <ul class="social">
                            <li>Le leadership, la transmission et les missions</li>
                            <li><a href="#"><img src="/img/iconePole/savoirs.png"
                                        alt="pole Evolution des Savoirs"></a></li>
                            <li><a class="transition" href="#"><img
                                        src="http://dooreight.com/codepen/people/behance.svg" alt="behance"></a></li>
                            <li><a class="transition" href="#"><img
                                        src="http://dooreight.com/codepen/people/facebook.svg" alt="facebook"></a></li>
                            <li><a class="transition" href="#"><img src="http://dooreight.com/codepen/people/skype.svg"
                                        alt="skype"></a></li>
                        </ul>
                        <span class="transition" id="couleur_evolution_savoir">
                            <h3>Xavier Tournillon<em>Evolution des savoirs</em></h3>
                            <i class="fas fa-angle-down" style="font-size: 3em;color:white"></i>
                        </span>
                    </div>
                </li>
            </div>

            <div class="col-12 col-lg-4">
                <li>
                    <div class="wrapper transition"> <img class="transition"
                            src="/img/poles/experts/francisMini.png" alt="Francis Descamps">
                        <ul class="social">
                            <li>La formation, l'éthique et le management durable en entreprise</li>
                            <li><a class="transition" href="#"><img src="/img/iconePole/metier.png"
                                        alt="pole Evolution des metiers"></a></li>
                            <li><a class="transition" href="#"><img
                                        src="http://dooreight.com/codepen/people/behance.svg" alt="behance"></a></li>
                            <li><a class="transition" href="#"><img
                                        src="http://dooreight.com/codepen/people/facebook.svg" alt="facebook"></a></li>
                            <li><a class="transition" href="#"><img src="http://dooreight.com/codepen/people/skype.svg"
                                        alt="skype"></a></li>
                        </ul>
                        <span class="transition" id="couleur_evolution_metiers">
                            <h3>Francis Descamps<em>Evolution des metiers</em></h3>
                            <i class="fas fa-angle-down" style="font-size: 3em;color:white"></i>
                        </span>
                    </div>
                </li>
            </div>
        </ul>
    </div>

    <div class="container">
        <ul class="one text-center row">
            <div class="col-sm-12 col-lg-4">
                <li>
                    <div class="wrapper transition"> <img class="transition"
                            src="/img/poles/experts/jeanYvesMini.png" alt="Jean Yves Prodel">
                        <ul class="social">
                            <li>Adaptabilité du logement, résidences inter-générationnelles</li>
                            <li><a class="transition" href="#"><img src="/img/iconePole/design.png"
                                        alt="pole design"></a></li>
                            <li><a class="transition" href="#"><img
                                        src="http://dooreight.com/codepen/people/behance.svg" alt="behance"></a></li>
                            <li><a class="transition" href="#"><img
                                        src="http://dooreight.com/codepen/people/facebook.svg" alt="facebook"></a></li>
                            <li><a class="transition" href="#"><img src="http://dooreight.com/codepen/people/skype.svg"
                                        alt="skype"></a></li>
                        </ul>
                        <span class="transition" id="couleur_autonomie_universal">
                            <h3>Jean-Yves Prodel<em>Autonomie &amp; Universal Design</em></h3>
                            <i class="fas fa-angle-down" style="font-size: 3em;color:white"></i>
                        </span>
                    </div>
                </li>
            </div>
            <div class="col-12 col-lg-4">
                <li>
                    <div class="wrapper transition"> <img class="transition"
                            src="/img/poles/experts/alainMini.png" alt="Alain Bechade">
                        <ul class="social">
                            <li>Préparer la nouvelle génération à mieux comprendre l'immobilier
                            </li>
                            <li><a class="transition" href="#"><img src="/img/iconePole/immobilier.png"
                                        alt="pole immobilier"></a></li>
                            <li><a class="transition" href="#"><img
                                        src="http://dooreight.com/codepen/people/behance.svg" alt="behance"></a></li>
                            <li><a class="transition" href="#"><img
                                        src="http://dooreight.com/codepen/people/facebook.svg" alt="facebook"></a></li>
                            <li><a class="transition" href="#"><img src="http://dooreight.com/codepen/people/skype.svg"
                                        alt="skype"></a></li>
                        </ul>
                        <span class="transition" id="couleur_immobilier">
                            <h3>Alain Bechade<em>Immobilier &amp; Silver Experience</em></h3>
                            <i class="fas fa-angle-down" style="font-size: 3em;color:white"></i>
                        </span>
                    </div>
                </li>
            </div>
            <div class="col-12 col-lg-4">
                <li>
                    <div class="wrapper transition"> <img class="transition"
                            src="/img/poles/experts/anneMarie.jpg" alt="Anne Marie Pinsolle">
                        <ul class="social">
                            <li>Relations internationales, partenariats</li>
                            <li><a class="transition" href="https://www.facebook.com/profile.php?id=100015302073425"><i
                                        title="facebook" class="fab fa-facebook"></i></a></li>
                            <li><a class="transition" href="https://twitter.com/ampinsolle?s=09"><i title="twitter"
                                        class="fab fa-twitter"></i></a></li>
                            <li><a class="transition" href="https://www.linkedin.com/in/anne-marie-pinsolle-a43a5711"><i
                                        title="linkedin" class="fab fa-linkedin"></i></a></li>
                            <li><a class="transition" href="https://www.instagram.com/annemariepinsolle/?hl=fr"><i
                                        title="instagram" class="fab fa-instagram"></i></a></li>
                            <li><a class="transition" href=""><i title="skype live:annemariepinsolle"
                                        class="fab fa-skype"></i></a></li>
                        </ul>
                        <span class="transition" id="couleur_communication">
                            <h3>Anne-M. Pinsolle <em>Communication et R&amp;D</em></h3>
                            <i class="fas fa-angle-down" style="font-size: 3em;color:white"></i>
                        </span>
                    </div>
                </li>
            </div>
        </ul>
    </div>
</div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>

    <script src="/assets/js/apropos.js"></script>

</body>

<link rel="stylesheet" href="/assets/css/footer.css">

<div>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>
<div class="row flex-wrap boutonsPoles mb-1 p-0 px-lg-5 justify-content-center">
    <div class="d-flex justify-content-center mt-1">
        <a href="../poles/commRechercheDev" class="btnPole btnCom btn">Communication R&amp;D</a>
    </div>
    <div class="d-flex justify-content-center m-1">
        <a href="../poles/evolutionSavoirs" class="btnPole btnSavoir btn">Evolution des savoirs</a>
    </div>
    <div class="d-flex justify-content-center m-1">
        <a href="/evoMetier/index" class="btnPole btnMetier btn">Evolution des metiers</a>
    </div>
    <div class="d-flex justify-content-center m-1">
        <a href="../poles/innovation" class="btnPole btnIno btn">Innovation</a>
    </div>
    <div class="d-flex justify-content-center m-1">
        <a href="../poles/immobilier" class="btnPole btnImmo btn ">Immobilier &amp; Silver Exp</a>
    </div>
    <div class="d-flex justify-content-center m-1">
        <a href="../poles/design" class="btnPole btnDesign btn">Universal Design</a>
    </div>
</div>





<div id="bg" class="px-2 px-lg-5">
    <div class="row mt-1 mt-lg-5">
        <div class="col-12 col-lg-3 align-self-end mx-auto my-auto text-center">
            <a href="/">
                <img class="img-fluid" src="/img/navbar/logo4.png" width="100%" alt="logo">
            </a>
        </div>

        <div class="col-12 col-lg-6 align-self-center mx-auto my-lg-3">
            <div class="row ">
                <a class="col-12 col-md-6 text-center lienFooter underline"
                    href="/newsletter/index">Newsletters</a>                 <a class="col-12 col-md-6 text-center lienFooter underline" href="/aideContact">Aide et
                    Contact</a>
                            </div>
            <hr class="hrFooter">
        </div>

        <div class="col-12 col-lg-3 align-self-center mx-auto text-center my-lg-3">
            <a class="follow mx-auto mb-2">Suivez-nous</a>
            <div class="text-center mx-auto">
                <a href="https://www.facebook.com/Association-Building-Seniors-105912975029190/?ref=pages_you_manage"><i
                        class="fab fa-facebook"></i></a>
                                                <a href="https://www.linkedin.com/company/association-building-seniors/about/?viewAsMember=true"><i
                        class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </div>

    <div class="mx-auto text-center mt-3">
        <p id="textFoot">L’Association «BUILDING SENIORS»©, créée en septembre 2015, a
            pour objet de grouper des personnes physiques ou morales
            dont l’activité professionnelle concerne, directement ou
            indirectement, les domaines de l’immobilier, du bâtiment,
            de l'environnement.</p>
    </div>

        <div class="text-center">
        Icons made by
        <a class="flaticon" href="https://www.freepik.com/" title="Freepik">
            Freepik
        </a>

        from

        <a class="flaticon" href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
        </a>
    </div>

    <div class="text-center mt-2 mt-lg-5">
        <p id="textFoot2">&copy; COPYRIGHT 2020 - ASSOCIATION BUILDING SENIORS - GENERATION BOOMERANG - TOUS DROITS
            RESERVES</p>
    </div>
</div>
</html>