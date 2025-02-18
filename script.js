document.addEventListener("DOMContentLoaded", () => {
  let selectedLang = null;

  // Objeto de traducciones para cada idioma
  const translations = {
    es: {
      nav: {
        como_llegar: "Cómo llegar",
        llegada_primer_dia: "Primer día",
        normas: "Normas",
        recomendaciones: "Recomendaciones",
        apartamento: "El apartamento",
        ultimo_dia: "Último día",
        telefonos: "Teléfonos"
      },
      sections: {
        como_llegar: {
          title: "Cómo llegar al apartamento",
          content: `
            <p>Desde el aeropuerto y la estación de tren, siga estas instrucciones:</p>
            <ul>
              <li><strong>Aeropuerto:</strong> Tome el tren o taxi hasta la estación central y siga las indicaciones.</li>
              <li><strong>Estación de tren:</strong> Camine 10 minutos hacia el norte y gire a la izquierda en Carrer de Balmes.</li>
            </ul>
          `
        },
        llegada_primer_dia: {
          title: "Llegada al apartamento, primer día",
          content: `
            <h2>Suministros Disponibles</h2>
            <ul>
              <li>Jabón</li>
              <li>Papel higiénico</li>
              <li>Café</li>
              <li>Agua</li>
              <li>Refrescos</li>
            </ul>
            <h2>Red WiFi</h2>
            <p>Nombre: <strong>NombreWiFi</strong></p>
            <p>Contraseña: <strong>ContraseñaWiFi</strong></p>
            <h2>Supermercados Cercanos</h2>
            <ul>
              <li>Bon Preu: Carrer Provença 138</li>
              <li>Suma Supermercat: Rosselló 96</li>
            </ul>
            <h2>Restaurantes Cercanos</h2>
            <ul>
              <li>Soda Bus: Aribau 127</li>
              <li>La Bodega de Joan: Aribau 176</li>
            </ul>
          `
        },
        normas: {
          title: "Normas de la casa",
          content: `
            <p>Por favor, respete las siguientes normas durante su estancia:</p>
            <ul>
              <li>No fumar en el interior del apartamento.</li>
              <li>Respetar el horario de silencio de 22:00 a 08:00.</li>
              <li>No organizar fiestas o eventos sin autorización.</li>
              <li>Mantener el apartamento limpio y en buen estado.</li>
            </ul>
          `
        },
        recomendaciones: {
          title: "Recomendaciones",
          content: `
            <p>Le recomendamos visitar los siguientes lugares y disfrutar de las actividades que Barcelona ofrece:</p>
            <ul>
              <li>La Sagrada Familia</li>
              <li>El Parque Güell</li>
              <li>Las Ramblas y el Barrio Gótico</li>
              <li>Playas y zonas de ocio</li>
            </ul>
          `
        },
        apartamento: {
          title: "El Apartamento",
          content: `
            <p>Nuestro apartamento cuenta con espacios modernos y acogedores, equipados con:</p>
            <ul>
              <li>Cocina totalmente equipada</li>
              <li>Habitaciones confortables</li>
              <li>Baños modernos</li>
              <li>WiFi de alta velocidad</li>
              <li>Terraza con vistas a la ciudad</li>
            </ul>
          `
        },
        ultimo_dia: {
          title: "Último Día",
          content: `
            <p>Para el check-out, por favor siga estas instrucciones:</p>
            <ul>
              <li>Deje las llaves en la recepción o en el buzón designado.</li>
              <li>Asegúrese de que el apartamento quede cerrado y en orden.</li>
              <li>Informe cualquier desperfecto a la mayor brevedad.</li>
            </ul>
          `
        },
        telefonos: {
          title: "Teléfonos de Interés",
          content: `
            <ul>
              <li><strong>Emergencias:</strong> 112</li>
              <li><strong>Recepción:</strong> [Número de recepción]</li>
              <li><strong>Asistencia 24h:</strong> [Número adicional]</li>
            </ul>
          `
        }
      }
    },
    en: {
      nav: {
        como_llegar: "How to get there",
        llegada_primer_dia: "First Day",
        normas: "House Rules",
        recomendaciones: "Recommendations",
        apartamento: "The Apartment",
        ultimo_dia: "Last Day",
        telefonos: "Contacts"
      },
      sections: {
        como_llegar: {
          title: "How to get to the apartment",
          content: `
            <p>From the airport and train station, follow these instructions:</p>
            <ul>
              <li><strong>Airport:</strong> Take the train or taxi to the central station and follow the signs.</li>
              <li><strong>Train Station:</strong> Walk 10 minutes north and turn left at Carrer de Balmes.</li>
            </ul>
          `
        },
        llegada_primer_dia: {
          title: "Arrival at the apartment, first day",
          content: `
            <h2>Available Supplies</h2>
            <ul>
              <li>Soap</li>
              <li>Toilet paper</li>
              <li>Coffee</li>
              <li>Water</li>
              <li>Sodas</li>
            </ul>
            <h2>WiFi Network</h2>
            <p>Name: <strong>NombreWiFi</strong></p>
            <p>Password: <strong>ContraseñaWiFi</strong></p>
            <h2>Nearby Supermarkets</h2>
            <ul>
              <li>Bon Preu: Carrer Provença 138</li>
              <li>Suma Supermercat: Rosselló 96</li>
            </ul>
            <h2>Nearby Restaurants</h2>
            <ul>
              <li>Soda Bus: Aribau 127</li>
              <li>La Bodega de Joan: Aribau 176</li>
            </ul>
          `
        },
        normas: {
          title: "House Rules",
          content: `
            <p>Please, follow these rules during your stay:</p>
            <ul>
              <li>No smoking inside the apartment.</li>
              <li>Respect the quiet hours from 10 PM to 8 AM.</li>
              <li>No parties or events without prior permission.</li>
              <li>Keep the apartment clean and in good condition.</li>
            </ul>
          `
        },
        recomendaciones: {
          title: "Recommendations",
          content: `
            <p>We recommend visiting the following places and enjoying the activities that Barcelona offers:</p>
            <ul>
              <li>Sagrada Familia</li>
              <li>Park Güell</li>
              <li>Las Ramblas and the Gothic Quarter</li>
              <li>Beaches and leisure areas</li>
            </ul>
          `
        },
        apartamento: {
          title: "The Apartment",
          content: `
            <p>Our apartment features modern and cozy spaces, equipped with:</p>
            <ul>
              <li>Fully equipped kitchen</li>
              <li>Comfortable bedrooms</li>
              <li>Modern bathrooms</li>
              <li>High-speed WiFi</li>
              <li>Terrace with city views</li>
            </ul>
          `
        },
        ultimo_dia: {
          title: "Last Day",
          content: `
            <p>For check-out, please follow these instructions:</p>
            <ul>
              <li>Leave the keys at the reception or in the designated mailbox.</li>
              <li>Ensure the apartment is locked and tidy.</li>
              <li>Report any damages promptly.</li>
            </ul>
          `
        },
        telefonos: {
          title: "Contacts",
          content: `
            <ul>
              <li><strong>Emergencies:</strong> 112</li>
              <li><strong>Reception:</strong> [Reception Number]</li>
              <li><strong>24h Assistance:</strong> [Additional Number]</li>
            </ul>
          `
        }
      }
    },
    it: {
      nav: {
        como_llegar: "Come arrivare",
        llegada_primer_dia: "Primo Giorno",
        normas: "Regole della casa",
        recomendaciones: "Raccomandazioni",
        apartamento: "L'Appartamento",
        ultimo_dia: "Ultimo Giorno",
        telefonos: "Contatti"
      },
      sections: {
        como_llegar: {
          title: "Come arrivare all'appartamento",
          content: `
            <p>Dall'aeroporto e dalla stazione, segui queste istruzioni:</p>
            <ul>
              <li><strong>Aeroporto:</strong> Prendi il treno o un taxi fino alla stazione central e segui le indicazioni.</li>
              <li><strong>Stazione:</strong> Cammina per 10 minuti verso nord e gira a sinistra in Carrer de Balmes.</li>
            </ul>
          `
        },
        llegada_primer_dia: {
          title: "Arrivo all'appartamento, primo giorno",
          content: `
            <h2>Forniture Disponibili</h2>
            <ul>
              <li>Sapone</li>
              <li>Carta igienica</li>
              <li>Caffè</li>
              <li>Acqua</li>
              <li>Bevande</li>
            </ul>
            <h2>WiFi</h2>
            <p>Nome: <strong>NombreWiFi</strong></p>
            <p>Password: <strong>ContraseñaWiFi</strong></p>
            <h2>Supermercati Vicini</h2>
            <ul>
              <li>Bon Preu: Carrer Provença 138</li>
              <li>Suma Supermercat: Rosselló 96</li>
            </ul>
            <h2>Ristoranti Vicini</h2>
            <ul>
              <li>Soda Bus: Aribau 127</li>
              <li>La Bodega de Joan: Aribau 176</li>
            </ul>
          `
        },
        normas: {
          title: "Regole della casa",
          content: `
            <p>Si prega di rispettare le seguenti regole durante il soggiorno:</p>
            <ul>
              <li>Non fumare all'interno dell'appartamento.</li>
              <li>Rispettare l'orario di silenzio dalle 22:00 alle 08:00.</li>
              <li>Nessuna festa o evento senza autorizzazione.</li>
              <li>Mantenere l'appartamento pulito e in buono stato.</li>
            </ul>
          `
        },
        recomendaciones: {
          title: "Raccomandazioni",
          content: `
            <p>Ti consigliamo di visitare i seguenti luoghi e di goderti le attività offerte da Barcellona:</p>
            <ul>
              <li>Sagrada Familia</li>
              <li>Parco Güell</li>
              <li>Le Ramblas e il Quartiere Gotico</li>
              <li>Spiagge e aree ricreative</li>
            </ul>
          `
        },
        apartamento: {
          title: "L'Appartamento",
          content: `
            <p>Il nostro appartamento dispone di spazi moderni e accoglienti, dotati di:</p>
            <ul>
              <li>Cucina completamente attrezzata</li>
              <li>Camere confortevoli</li>
              <li>Bagni moderni</li>
              <li>WiFi ad alta velocità</li>
              <li>Terrazza con vista sulla città</li>
            </ul>
          `
        },
        ultimo_dia: {
          title: "Ultimo Giorno",
          content: `
            <p>Per il check-out, segui queste istruzioni:</p>
            <ul>
              <li>Lascia le chiavi alla reception o nella cassetta designata.</li>
              <li>Assicurati che l'appartamento sia chiuso e ordinato.</li>
              <li>Segnala eventuali danni il prima possibile.</li>
            </ul>
          `
        },
        telefonos: {
          title: "Contatti",
          content: `
            <ul>
              <li><strong>Emergenze:</strong> 112</li>
              <li><strong>Reception:</strong> [Numero di reception]</li>
              <li><strong>Assistenza 24h:</strong> [Numero aggiuntivo]</li>
            </ul>
          `
        }
      }
    },
    fr: {
      nav: {
        como_llegar: "Comment arriver",
        llegada_primer_dia: "Premier Jour",
        normas: "Règles de la maison",
        recomendaciones: "Recommandations",
        apartamento: "L'Appartement",
        ultimo_dia: "Dernier Jour",
        telefonos: "Contacts"
      },
      sections: {
        como_llegar: {
          title: "Comment arriver à l'appartement",
          content: `
            <p>Depuis l'aéroport et la gare, suivez ces instructions :</p>
            <ul>
              <li><strong>Aéroport :</strong> Prenez le train ou un taxi jusqu'à la gare centrale et suivez les indications.</li>
              <li><strong>Gare :</strong> Marchez 10 minutes vers le nord et tournez à gauche dans Carrer de Balmes.</li>
            </ul>
          `
        },
        llegada_primer_dia: {
          title: "Arrivée à l'appartement, premier jour",
          content: `
            <h2>Fournitures Disponibles</h2>
            <ul>
              <li>Gel douche</li>
              <li>Papier toilette</li>
              <li>Café</li>
              <li>Eau</li>
              <li>Sodas</li>
            </ul>
            <h2>WiFi</h2>
            <p>Nom : <strong>NombreWiFi</strong></p>
            <p>Mot de passe : <strong>ContraseñaWiFi</strong></p>
            <h2>Supermarchés à proximité</h2>
            <ul>
              <li>Bon Preu : Carrer Provença 138</li>
              <li>Suma Supermercat : Rosselló 96</li>
            </ul>
            <h2>Restaurants à proximité</h2>
            <ul>
              <li>Soda Bus : Aribau 127</li>
              <li>La Bodega de Joan : Aribau 176</li>
            </ul>
          `
        },
        normas: {
          title: "Règles de la maison",
          content: `
            <p>Veuillez respecter les règles suivantes pendant votre séjour :</p>
            <ul>
              <li>Il est interdit de fumer à l'intérieur de l'appartement.</li>
              <li>Respectez le silence de 22h00 à 08h00.</li>
              <li>Aucune fête ou événement sans autorisation.</li>
              <li>Maintenez l'appartement propre et en bon état.</li>
            </ul>
          `
        },
        recomendaciones: {
          title: "Recommandations",
          content: `
            <p>Nous vous recommandons de visiter les lieux suivants et de profiter des activités que Barcelone offre :</p>
            <ul>
              <li>Sagrada Familia</li>
              <li>Parc Güell</li>
              <li>Les Ramblas et le Quartier Gothique</li>
              <li>Plages et zones de loisirs</li>
            </ul>
          `
        },
        apartamento: {
          title: "L'Appartement",
          content: `
            <p>Notre appartement dispose d'espaces modernes et accueillants, équipés de :</p>
            <ul>
              <li>Cuisine entièrement équipée</li>
              <li>Chambres confortables</li>
              <li>Salles de bains modernes</li>
              <li>WiFi haute vitesse</li>
              <li>Terrasse avec vue sur la ville</li>
            </ul>
          `
        },
        ultimo_dia: {
          title: "Dernier Jour",
          content: `
            <p>Pour le check-out, veuillez suivre ces instructions :</p>
            <ul>
              <li>Déposez les clés à la réception ou dans la boîte aux lettres désignée.</li>
              <li>Assurez-vous que l'appartement est fermé et en ordre.</li>
              <li>Signalez tout dégât dès que possible.</li>
            </ul>
          `
        },
        telefonos: {
          title: "Contacts",
          content: `
            <ul>
              <li><strong>Urgences :</strong> 112</li>
              <li><strong>Réception :</strong> [Numéro de réception]</li>
              <li><strong>Assistance 24h :</strong> [Numéro supplémentaire]</li>
            </ul>
          `
        }
      }
    },
    zh: {
      nav: {
        como_llegar: "如何到达",
        llegada_primer_dia: "第一天",
        normas: "房屋规则",
        recomendaciones: "推荐",
        apartamento: "公寓",
        ultimo_dia: "最后一天",
        telefonos: "联系方式"
      },
      sections: {
        como_llegar: {
          title: "如何到达公寓",
          content: `
            <p>从机场和火车站出发，请按照以下说明前往：</p>
            <ul>
              <li><strong>机场：</strong>乘坐火车或出租车到达中央车站，然后按照指示前进。</li>
              <li><strong>火车站：</strong>步行10分钟向北，左转进入 Carrer de Balmes。</li>
            </ul>
          `
        },
        llegada_primer_dia: {
          title: "到达公寓，第一天",
          content: `
            <h2>可用物资</h2>
            <ul>
              <li>香皂</li>
              <li>卫生纸</li>
              <li>咖啡</li>
              <li>水</li>
              <li>饮料</li>
            </ul>
            <h2>WiFi网络</h2>
            <p>名称：<strong>NombreWiFi</strong></p>
            <p>密码：<strong>ContraseñaWiFi</strong></p>
            <h2>附近超市</h2>
            <ul>
              <li>Bon Preu: Carrer Provença 138</li>
              <li>Suma Supermercat: Rosselló 96</li>
            </ul>
            <h2>附近餐馆</h2>
            <ul>
              <li>Soda Bus: Aribau 127</li>
              <li>La Bodega de Joan: Aribau 176</li>
            </ul>
          `
        },
        normas: {
          title: "房屋规则",
          content: `
            <p>请在住宿期间遵守以下规则：</p>
            <ul>
              <li>公寓内禁止吸烟。</li>
              <li>请遵守22:00至08:00的安静时段。</li>
              <li>未经许可不得举办派对或活动。</li>
              <li>保持公寓整洁有序。</li>
            </ul>
          `
        },
        recomendaciones: {
          title: "推荐",
          content: `
            <p>我们建议您参观以下景点，并享受巴塞罗那提供的各种活动：</p>
            <ul>
              <li>圣家堂</li>
              <li>桂尔公园</li>
              <li>拉姆布拉斯大街和哥特区</li>
              <li>海滩及休闲区</li>
            </ul>
          `
        },
        apartamento: {
          title: "公寓",
          content: `
            <p>我们的公寓拥有现代化、舒适的空间，设施包括：</p>
            <ul>
              <li>设备齐全的厨房</li>
              <li>舒适的卧室</li>
              <li>现代化浴室</li>
              <li>高速WiFi</li>
              <li>可观城市景观的露台</li>
            </ul>
          `
        },
        ultimo_dia: {
          title: "最后一天",
          content: `
            <p>办理退房时，请按以下说明操作：</p>
            <ul>
              <li>将钥匙留在接待处或指定的信箱中。</li>
              <li>确保公寓关闭并保持整洁。</li>
              <li>如有任何损坏，请及时报告。</li>
            </ul>
          `
        },
        telefonos: {
          title: "联系方式",
          content: `
            <ul>
              <li><strong>紧急情况：</strong>112</li>
              <li><strong>接待处：</strong>【接待电话】</li>
              <li><strong>24小时服务：</strong>【附加号码】</li>
            </ul>
          `
        }
      }
    }
  };

  // Elementos de la página
  const langButtons = document.querySelectorAll(".lang-btn");
  const contentWrapper = document.querySelector(".content-wrapper");
  const navLinks = document.querySelectorAll(".nav-link");

  // Botones de toggle para menús en móvil
  const languageToggle = document.getElementById("languageToggle");
  const languageList = document.getElementById("languageList");
  const navToggle = document.getElementById("navToggle");
  const navbar = document.getElementById("navbar");

  // Función para actualizar los textos según el idioma seleccionado
  function updateLanguage(lang) {
    selectedLang = lang;
    // Actualiza el texto de los enlaces de navegación
    navLinks.forEach(link => {
      const sectionKey = link.getAttribute("data-section");
      if (translations[lang] && translations[lang].nav[sectionKey]) {
        link.textContent = translations[lang].nav[sectionKey];
      }
    });
    // Actualiza el contenido de cada sección
    for (const sectionKey in translations[lang].sections) {
      const section = document.getElementById(sectionKey);
      if (section) {
        section.querySelector("h1").textContent = translations[lang].sections[sectionKey].title;
        section.querySelector(".section-content").innerHTML = translations[lang].sections[sectionKey].content;
      }
    }
  }

  // Eventos para selección de idioma
  langButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      updateLanguage(lang);
      if (contentWrapper.classList.contains("hidden")) {
        contentWrapper.classList.remove("hidden");
      }
      // En móvil, cierra el menú de idiomas si está abierto
      if (languageList.classList.contains("active")) {
        languageList.classList.remove("active");
      }
    });
  });

  // Toggle del menú de idiomas en móvil
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      languageList.classList.toggle("active");
    });
  }

  // Toggle de la navegación interna en móvil
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  // Navegación entre secciones sin recargar la página
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelectorAll(".content-section").forEach(section => section.classList.remove("active"));

      this.classList.add("active");
      const targetId = this.getAttribute("data-section");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
      // Cierra el menú de navegación en móvil
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
      }
    });
  });
});

