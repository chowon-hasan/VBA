"use client";
import Image from "next/image";
import Link from "next/link";

export default function Produits() {
  return (
    <section className="produits" style={{ padding: "100px 0" }}>
      <div className="container mx-auto">
        <div className="">
          <main className="flex  flex-col lg:p-8 md:p-4 p-2 z-20 relative">
            <div className="lg:w-[1150px] mx-auto">
              <div className="product bg-[#FFA616] py-4 text-center rounded-md">
                <h2 className="text-3xl font-bold capitalize text-white">
                  Trouvez ici votre
                </h2>
                <h1 className="text-5xl font-bold  my-3 text-white">
                  Calculateur boite automatique
                </h1>
                <h2 className="text-3xl font-bold text-white">
                  Renault - Ford
                </h2>
                <h3 className="text-lg font-bold mt-4 text-white">
                  Vérifiez la disponibilité
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-5">
              {/* Produits */}
              <div className="rounded-md shadow-2xl p-5 bg-white">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-full h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />

                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform `}
                  >
                    Renault Captur
                  </h2>
                </div>

                <div className="flex justify-center gap-5">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-2009-2015/renault-captur"
                      className="hover:underline hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-2009-2015/renault-captur"
                    >
                      <h2>
                        1.2 <br /> Diesel de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center gap-5 mt-5">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de-2016/renault-captur"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de-2016/renault-captur"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Produit 2 */}
              <div className="rounded-md shadow-2xl p-5 bg-white">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-full h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform `}
                  >
                    Renault Clio IV
                  </h2>
                </div>
                <div className="flex justify-center gap-5">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-2009-2015/renault-clioiv"
                      className="hover:underline hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-2009-2015/renault-clioiv"
                    >
                      <h2>
                        1.2 <br /> Diesel de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center  gap-5 mt-5">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de-2016/renault-clioiv"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de-2016/renault-clioiv"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Produit 3 */}
              <div className="rounded-md shadow-2xl p-5 bg-white">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-full h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform `}
                  >
                    Renault Mégane
                  </h2>
                </div>

                <div className="flex justify-center gap-5">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-2009-2015/renault-megane"
                      className="hover:underline hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-2009-2015/renault-megane"
                    >
                      <h2>
                        1.2 <br /> Diesel de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center gap-5 mt-5">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de-2016/renault-megane"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de-2016/renault-megane"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Produit 4 */}
              <div className="rounded-md shadow-2xl p-5 bg-white">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-full h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform `}
                  >
                    Renault Scénic
                  </h2>
                </div>
                <div className="flex justify-center gap-5 ">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-2009-2015/renault-scenic"
                      className="hover:underline hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-2009-2015/renault-scenic"
                    >
                      <h2>
                        1.2 <br /> Diesel de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center gap-5 mt-5">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de-2016/renault-scenic"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de-2016/renault-scenic"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Produit 5 */}
              <div className="rounded-md shadow-2xl p-5 bg-white">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-full h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform `}
                  >
                    Renault Fluence
                  </h2>
                </div>
                <div className="flex justify-center gap-5">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-2009-2015/renault-fluence"
                      className="hover:underline hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence de <br /> 2009 à 2015
                      </h2>
                    </Link>{" "}
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-2009-2015/renault-fluence"
                    >
                      <h2>
                        1.2 <br /> Diesel de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center gap-5 mt-5">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de-2016/renault-fluence"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de-2016/renault-fluence"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Product 6 */}

              <div className="rounded-md shadow-2xl p-5 bg-white">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-full h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform `}
                  >
                    Ford Focus
                  </h2>
                </div>
                <div className="flex justify-center gap-5 ">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-2009-2015/ford-focus"
                      className="hover:underline hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence de <br />
                        2009 à 2015
                      </h2>
                    </Link>
                  </div>

                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-2009-2015/ford-focus"
                    >
                      <h2>
                        1.2 <br /> Diesel de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div>
                </div>

                <div className="flex justify-center gap-5 mt-5">
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de-2016/ford-focus"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de-2016/ford-focus"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              {/* product 7 */}

              {/* <div className="rounded-md shadow-2xl p-5 bg-white">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-full h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex    justify-center">
                  <h2
                    className={`mt-3 mb-3 text-2xl   font-semibold text-center transition-transform `}
                  >
                    Mercedes Class A
                  </h2>
                </div>
                <div className="mx-auto border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                  <Link
                    href="/produits/2006-2011/mercedes-class-a"
                    className="hover:underline  hover:text-orangevba"
                  >
                    De 2006 à 2011
                  </Link>
                </div>
              </div> */}
              {/* product 8 */}
              {/* <div className="rounded-md shadow-2xl p-5 bg-white">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-full h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform `}
                  >
                    Mercedes Class B
                  </h2>
                </div>
                <div className="mx-auto border border-[#FFA616] rounded-md text-center py-2 px-5 shadow-2xl">
                  <Link
                    href="/produits/2006-2011/mercedes-class-b"
                    className="hover:underline hover:text-orangevba"
                  >
                    De 2006 à 2011
                  </Link>
                </div>
              </div> */}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
