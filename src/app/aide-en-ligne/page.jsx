"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const MiseEnLigne = () => {
  <Head>
    <title>
      Aide en ligne pour les codes défault pour les boîte automatique Renault
    </title>
  </Head>;

  const MAX_RESULTS = 20;

  const initialCodes = [
    {
      code: "DTC940811",
      description: "Circuit temoin . Court-circuit à la masse",
      aide: "Vérifier l'état de la batterie",
    },
    {
      code: "DTC1525F3",
      description:
        "Incohérences information multiplexées pour rv/lv/Régulateur vitesse non conforme",
      aide: "Vérifier l'état de la batterie",
    },
    {
      code: "DTC174301",
      description:
        "Circuit moteur embrayage 1. Panne electrique non identifiée. Problème sur le calculateur",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC174311",
      description: "Circuit moteur embrayage 1. Court-circuit à la masse",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC174401",
      description:
        "Circuit moteur embrayage 2. Panne eléctrique non identifiée",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC174411",
      description: "Circuit moteur embrayage 2. Court-circuit à la masse",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC17441C",
      description:
        "Circuit moteur embrayage 2 problème calculateur et/ou embrayage",
      aide: "",
    },
    {
      code: "DTC180401",
      description:
        "Tension alimentation calculateur/ Mauvaise tension batterie",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC180714",
      description:
        "Circuit contacteur position levier. Circuit ouvert ou court-circuit à la masse.",
      aide: "Vérifier l'état de la batterie + effectuer un calibrage du sélecteur + vérifier le programme",
    },
    {
      code: "DTC180962",
      description: "Circuit contacteur position levier. Signal constant.",
      aide: "Vérifier l'état de la batterie + effectuer un calibrage du sélecteur + vérifier le programme",
    },
    {
      code: "DTC181516",
      description: "Tension batterie 12v. Basse tension",
      aide: "Vérifier l'état de la batterie",
    },
    {
      code: "DTC183892",
      description:
        "Tambour de selection de vitesse 1. Signal hors limite basse ou haute",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC185111",
      description: "Signal moteur embrayage 2. Court circuit à la masse",
      aide: "Problème calculateur",
    },
    {
      code: "DTC185562",
      description: "Signal moteur embrayage 2. Signal non plausible",
      aide: "Problème calculateur",
    },
    {
      code: "DTC185764",
      description: "Moteur embrayage 2. Incohérence signal",
      aide: "Problème calculateur",
    },
    {
      code: "DTC187298",
      description: "Embrayage 2. Température mesurée trop forte",
      aide: "Problème calculateur et/ou embrayage",
    },
    {
      code: "DTC189311",
      description: "Drum 2 moteur. Court circuit à la masse",
      aide: "Problème calculateur",
    },
    {
      code: "DTC189412",
      description:
        "Circuit moteur tambour de selection vitesse 1. Court-circuit au + 12 volts",
      aide: "Problème calculateur",
    },
    {
      code: "DTC191211",
      description:
        "Circuit capteur regime entrée 1 boite. Court-circuit à la masse",
      aide: "Problème calculateur. Contrôler le programme de la boite automatique",
    },
    {
      code: "DTC191311",
      description:
        "Circuit capteur régime entrée 2 boite. Court circuit à la masse",
      aide: "Problème calculateur. Contrôler le programme de la boite automatique",
    },
    {
      code: "DTC404086",
      description:
        "Info multiplexée pédale de frein uch invalide. Contacteur de frein invalide",
      aide: "Vérifier l'état de la batterie + capteur de pédale de frein",
    },
    {
      code: "DTC500886",
      description:
        "Information multiplexée temerature exterieure. Incohérence du signal",
      aide: "Vérifier l'état de la batterie + capteur de température",
    },
    {
      code: "DTC500887",
      description:
        "Information multiplexée temperatere exterieure. Absence de signal",
      aide: "Vérifier l'état de la batterie + capteur de température",
    },
    {
      code: "DTCAAAB47",
      description: "Calculateur. Anomalie électronique interne",
      aide: "Problème calculateur. Contrôler le programme de la boite automatique. Effectuer un calibrage.",
    },
    {
      code: "DTCAAB047",
      description: "Panne electrique interne",
      aide: "Problème calculateur. Contrôler le programme de la boite automatique",
    },
    {
      code: "DTCC41787",
      description: "Information multiplexée contact frein secondaire",
      aide: "Vérifier l'état de la batterie + Capteur de pédale de frein",
    },
    {
      code: "DTCD22186",
      description: "Signal multiplexe roue avant gauche.",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTCD22086",
      description: "Signal multiplexe roue avant droite.",
      aide: "Incohérence signal vérifier l'état de la batterie + peut être problème calculateur",
    },
  ];

  const generateH2Tags = () => {
    return initialCodes.map((code, index) => (
      <h2 className="hidden" key={index}>
        {code.code}
      </h2>
    ));
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCodes, setFilteredCodes] = useState([]);

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filtered = initialCodes
      .filter(
        (code) =>
          code.code.toLowerCase().includes(searchTermLowerCase) ||
          code.description.toLowerCase().includes(searchTermLowerCase) ||
          code.aide.toLowerCase().includes(searchTermLowerCase)
      )
      .slice(0, MAX_RESULTS); // Limiter le nombre de résultats affichés
    setFilteredCodes(filtered);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(); // Appeler la fonction de recherche à chaque modification de la saisie
  };

  const [selectedCode, setSelectedCode] = useState(null); // Ajout d'un nouvel état

  // Fonction pour gérer le clic sur la recommandation
  const toggleRecommendation = (code) => {
    setSelectedCode(selectedCode === code ? null : code); // Basculer l'affichage de la recommandation
  };

  return (
    <section className="py-[60px] checker">
      <div className="md:px-24 mx-auto">
        .
        <h2 className="md:w-[350px] mx-auto mt-8  p-4 rounded-2xl bg-[#FFA616] text-white text-3xl font-semibold  text-center">
          - Aide en ligne - <br /> Boite de vitesse <br /> à contrôler
        </h2>
        {/* Conteneur principal */}
        <div className="relative">
          {/* Configuration de la page */}
          <Head>
            <title>Aide en ligne - Boite de vitesse à contrôler</title>
          </Head>

          {/* Partie gauche - Texte initial */}
          <div className="searchCont md:flex justify-between">
            <div className="md:w-[420px] md:h-[510px] text-[16px] border-2 border-orangevba bg-white p-4 mt-8 mb-8 rounded-lg shadow-xl text-black ">
              <p className="mb-6 ">
                Les boites automatiques (modèles DC4 et 6DCT250) couramment
                installées dans les véhicules
                <a className="font-bold " href="/produits">
                  {" "}
                  Renault Captur, Mégane, Scénic, Clio 4, Fluence{" "}
                </a>{" "}
                se composent principalement :
              </p>

              <ul className="list-disc pl-6  mb-6">
                <li>
                  d’un{" "}
                  <a className="font-semibold cursor-text">
                    double embrayage à sec.
                  </a>{" "}
                </li>
                <li>
                  d’un{" "}
                  <a className="font-semibold cursor-text">volant moteur.</a>
                </li>
                <li>
                  de <a className="font-semibold cursor-text">synchros</a>{" "}
                </li>
                <li>
                  d'un <a className="font-semibold cursor-text">calculateur.</a>{" "}
                </li>
              </ul>

              <p className="mb-6">
                Nous avons observé que les calculateurs de ces modèles peuvent
                présenter des défaillances en <br /> dessous de{" "}
                <a className="font-bold underline cursor-text">120 000 km</a> .
                De plus, il est fréquent que le double embrayage et le volant
                moteur commencent à montrer des signes d'usure à partir de{" "}
                <a className="font-bold underline cursor-text">150 000 km</a>.
                Pour anticiper et résoudre ces problèmes, nous pouvons{" "}
                <a className="font-bold underline cursor-text">
                  vérifier l'état précis de l'embrayage
                </a>{" "}
                grâce à un équipement de diagnostic spécialisé.
              </p>
            </div>

            {/* Partie droite - Barre de recherche et résultats */}
            <div className="md:w-[420px] mt-8">
              {/* Barre de recherche */}
              <div className="md:w-[420px]">
                <p className="bg-[#FFA616] text-white items-center text-[16px] border border-1 border-[#FFA616]  mx-auto p-2 mb-3">
                  Rechercher code erreur ou description:{" "}
                </p>
                <div className="">
                  <input
                    type="text"
                    placeholder="Code erreur ou description"
                    value={searchTerm}
                    onChange={handleChange}
                    className="SearchInput md:w-2/3 p-2 border border-gray-300 mb-4 rounded text-[16px]"
                  />

                  <div className="">
                    <button
                      onClick={handleSearch}
                      className="bg-[#FFA616] text-[16px] text-white py-3 px-8 rounded-md hover:bg-[#B1D8FF] hover:text-black"
                    >
                      Rechercher
                    </button>
                  </div>
                </div>
              </div>

              {/* Résultats de la recherche */}
              {searchTerm.length >= 3 && (
                <div className="bg-white mt-5 p-4 rounded-lg shadow-xl  text-lg overflow-y-auto max-h-[370px]">
                  {filteredCodes.length > 0 ? (
                    <div>
                      {/* Affichage des codes filtrés */}
                      {filteredCodes.map((code) => (
                        <div
                          key={code.code}
                          className="mb-6 p-4 border-4 border-orangevba"
                        >
                          <p className="font-bold text-md mb-2">{code.code}</p>
                          <p className="mb-2 text-[16px]">{code.description}</p>

                          <a
                            href="#"
                            className="text-orangevba font-semibold"
                            onClick={() => toggleRecommendation(code.code)}
                          >
                            Recommendation
                          </a>
                          {selectedCode === code.code && (
                            <span className="text-orangevba font-semibold">
                              : <br />
                              {code.aide}
                            </span>
                          )}
                          <p className="mt-5 text-[16px]">
                            Pour plus d'informations, merci de nous
                          </p>
                          <div className="flex items-center mt-5">
                            <p>Contacter</p>
                            <Link
                              href="/contact"
                              className="bg-[#FFA616] text-[16px] ms-5 text-white py-2 px-4 rounded-md hover:bg-[#B1D8FF] hover:text-black"
                            >
                              Nous contacter
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Aucun code trouvé
                    <div className="text-center">
                      <p className="text-2xl font-bold mb-2">
                        CODE DÉFAUT INCONNU
                      </p>
                      <p>Le code défaut saisi est inconnu</p>
                      <p className="mb-4">
                        Pour plus d'informations, merci de nous contacter
                      </p>
                      <Link
                        href="/contact"
                        className="bg-[#FFA616] text-white py-3 px-5 text-[16px] rounded-md hover:bg-[#B1D8FF] hover:text-black"
                      >
                        Nous contacter
                      </Link>
                      {generateH2Tags()}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiseEnLigne;
