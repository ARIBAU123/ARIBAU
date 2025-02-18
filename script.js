// Objeto de traducciones para cada idioma
const translations = {
  es: {
    nav: {
      howTo: "Cómo llegar",
      arrival: "Llegada al apartamento, primer día",
      rules: "Normas de la casa",
      recommendations: "Recomendaciones",
      apartment: "El apartamento",
      lastDay: "Último día",
      phones: "Teléfonos de interés"
    },
    sections: {
      howTo: {
        title: "Cómo llegar",
        instructions: "Desde el Aeropuerto de El Prat: Toma el Aerobús hasta Plaça Catalunya y, desde allí, toma un taxi o camina hasta el apartamento. Desde la Estación de Sants: Toma la línea L5 del metro, baja en la parada Diagonal y camina unos 10 minutos.",
        address: "Dirección: Carrer Aribau 123, Barcelona, 08036"
      },
      arrival: {
        title: "Llegada al apartamento, primer día",
        supplies: "Suministros: jabón, papel higiénico, café, agua y refrescos.",
        wifi: "WiFi: Nombre: 'ApartamentoBarcaWiFi', Contraseña: 'Bienvenido123'",
        supermarkets: "Supermercados cercanos: Bon Preu (Carrer Provença 138), Suma Supermercat (Rosselló 96).",
        restaurants: "Restaurantes cercanos: Soda Bus (Aribau 127), La Bodega de Joan (Aribau 176)."
      },
      rules: {
        title: "Normas de la casa",
        content: "No fumar dentro del apartamento. Respetar el horario de silencio de 22:00 a 08:00. No organizar fiestas o eventos sin autorización. Mantener el apartamento limpio y en buen estado."
      },
      recommendations: {
        title: "Recomendaciones",
        content: "Lugares y actividades en Barcelona: Visitar la Sagrada Familia, Parque Güell, Las Ramblas y el Barrio Gótico. Disfrutar de las playas y parques urbanos. Otras actividades culturales y de ocio."
      },
      apartment: {
        title: "El apartamento",
        description: "Espacios modernos y acogedores, cocina totalmente equipada, habitaciones confortables y bien iluminadas, baños modernos, conexión WiFi de alta velocidad y terraza con vistas a la ciudad.",
        address: "Dirección: Carrer Aribau 123, Barcelona, 08036"
      },
      lastDay: {
        title: "Último día",
        instructions: "Para el check-out: dejar las llaves en la recepción o en un buzón designado, asegurarse de que el apartamento quede cerrado y en orden, e informar de cualquier desperfecto o daño."
      },
      phones: {
        title: "Teléfonos de interés",
        numbers: "Emergencias: 112, Recepción: [Número de recepción], Asistencia 24h: [Número adicional]."
      }
    }
  },
  en: {
    nav: {
      howTo: "How to get there",
      arrival: "Arrival at the apartment, first day",
      rules: "House rules",
      recommendations: "Recommendations",
      apartment: "The apartment",
      lastDay: "Last day",
      phones: "Important numbers"
    },
    sections: {
      howTo: {
        title: "How to get there",
        instructions: "From El Prat Airport: Take the Aerobus to Plaça Catalunya and then a taxi or walk to the apartment. From Sants Station: Take metro line L5, get off at Diagonal, then walk about 10 minutes.",
        address: "Address: Carrer Aribau 123, Barcelona, 08036"
      },
      arrival: {
        title: "Arrival at the apartment, first day",
        supplies: "Supplies: soap, toilet paper, coffee, water, and soft drinks.",
        wifi: "WiFi: Name: 'ApartamentoBarcaWiFi', Password: 'Bienvenido123'",
        supermarkets: "Nearby supermarkets: Bon Preu (Carrer Provença 138), Suma Supermercat (Rosselló 96).",
        restaurants: "Nearby restaurants: Soda Bus (Aribau 127), La Bodega de Joan (Aribau 176)."
      },
      rules: {
        title: "House rules",
        content: "No smoking inside the apartment. Respect quiet hours from 10:00 PM to 8:00 AM. No parties or events without permission. Keep the apartment clean and in good condition."
      },
      recommendations: {
        title: "Recommendations",
        content: "Places and activities in Barcelona: Visit the Sagrada Familia, Park Güell, Las Ramblas, and the Gothic Quarter. Enjoy the city beaches and urban parks. Other cultural and leisure activities."
      },
      apartment: {
        title: "The apartment",
        description: "Modern and cozy spaces, fully equipped kitchen, comfortable and well-lit rooms, modern bathrooms, high-speed WiFi, and a terrace with city views.",
        address: "Address: Carrer Aribau 123, Barcelona, 08036"
      },
      lastDay: {
        title: "Last day",
        instructions: "For check-out: leave the keys at reception or in a designated mailbox, ensure the apartment is closed and tidy, and report any damages."
      },
      phones: {
        title: "Important numbers",
        numbers: "Emergency: 112, Reception: [Reception number], 24h Assistance: [Additional number]."
      }
    }
  },
  it: {
    nav: {
      howTo: "Come arrivare",
      arrival: "Arrivo all'appartamento, primo giorno",
      rules: "Regole della casa",
      recommendations: "Raccomandazioni",
      apartment: "L'appartamento",
      lastDay: "Ultimo giorno",
      phones: "Numeri utili"
    },
    sections: {
      howTo: {
        title: "Come arrivare",
        instructions: "Dall'Aeroporto di El Prat: Prendi l'Aerobus fino a Plaça Catalunya e poi un taxi o cammina fino all'appartamento. Dalla Stazione di Sants: Prendi la linea L5 della metro, scendi alla fermata Diagonal e cammina per circa 10 minuti.",
        address: "Indirizzo: Carrer Aribau 123, Barcelona, 08036"
      },
      arrival: {
        title: "Arrivo all'appartamento, primo giorno",
        supplies: "Forniture: sapone, carta igienica, caffè, acqua e bibite.",
        wifi: "WiFi: Nome: 'ApartamentoBarcaWiFi', Password: 'Bienvenido123'",
        supermarkets: "Supermercati vicini: Bon Preu (Carrer Provença 138), Suma Supermercat (Rosselló 96).",
        restaurants: "Ristoranti vicini: Soda Bus (Aribau 127), La Bodega de Joan (Aribau 176)."
      },
      rules: {
        title: "Regole della casa",
        content: "Non fumare all'interno dell'appartamento. Rispetta l'orario di silenzio dalle 22:00 alle 08:00. Non organizzare feste o eventi senza autorizzazione. Mantieni l'appartamento pulito e in buone condizioni."
      },
      recommendations: {
        title: "Raccomandazioni",
        content: "Luoghi e attività a Barcellona: visita la Sagrada Familia, il Parco Güell, Las Ramblas e il Quartiere Gotico. Goditi le spiagge della città e i parchi urbani. Altre attività culturali e di svago."
      },
      apartment: {
        title: "L'appartamento",
        description: "Spazi moderni e accoglienti, cucina completamente attrezzata, camere confortevoli e ben illuminate, bagni moderni, WiFi ad alta velocità e terrazza con vista sulla città.",
        address: "Indirizzo: Carrer Aribau 123, Barcelona, 08036"
      },
      lastDay: {
        title: "Ultimo giorno",
        instructions: "Per il check-out: lascia le chiavi alla reception o in una cassetta postale designata, assicurati che l'appartamento sia chiuso e in ordine, e segnala eventuali danni."
      },
      phones: {
        title: "Numeri utili",
        numbers: "Emergenza: 112, Reception: [Numero di reception], Assistenza 24h: [Numero aggiuntivo]."
      }
    }
  },
  fr: {
    nav: {
      howTo: "Comment arriver",
      arrival: "Arrivée à l'appartement, premier jour",
      rules: "Règles de la maison",
      recommendations: "Recommandations",
      apartment: "L'appartement",
      lastDay: "Dernier jour",
      phones: "Numéros utiles"
    },
    sections: {
      howTo: {
        title: "Comment arriver",
        instructions: "Depuis l'Aéroport de El Prat : Prenez l'Aerobus jusqu'à Plaça Catalunya, puis un taxi ou marchez jusqu'à l'appartement. Depuis la Gare de Sants : Prenez la ligne L5 du métro, descendez à Diagonal et marchez environ 10 minutes.",
        address: "Adresse : Carrer Aribau 123, Barcelona, 08036"
      },
      arrival: {
        title: "Arrivée à l'appartement, premier jour",
        supplies: "Fournitures : savon, papier toilette, café, eau et boissons gazeuses.",
        wifi: "WiFi : Nom : 'ApartamentoBarcaWiFi', Mot de passe : 'Bienvenido123'",
        supermarkets: "Supermarchés à proximité : Bon Preu (Carrer Provença 138), Suma Supermercat (Rosselló 96).",
        restaurants: "Restaurants à proximité : Soda Bus (Aribau 127), La Bodega de Joan (Aribau 176)."
      },
      rules: {
        title: "Règles de la maison",
        content: "Il est interdit de fumer dans l'appartement. Respectez le couvre-feu de 22h à 8h. Pas de fêtes ou d'événements sans autorisation. Maintenez l'appartement propre et en bon état."
      },
      recommendations: {
        title: "Recommandations",
        content: "Lieux et activités à Barcelone : Visitez la Sagrada Familia, le Parc Güell, Las Ramblas et le Quartier Gothique. Profitez des plages et des parcs urbains. Autres activités culturelles et de loisirs."
      },
      apartment: {
        title: "L'appartement",
        description: "Espaces modernes et accueillants, cuisine entièrement équipée, chambres confortables et bien éclairées, salles de bains modernes, WiFi haut débit et terrasse avec vue sur la ville.",
        address: "Adresse : Carrer Aribau 123, Barcelona, 08036"
      },
      lastDay: {
        title: "Dernier jour",
        instructions: "Pour le check-out : déposez les clés à la réception ou dans une boîte aux lettres désignée, assurez-vous que l'appartement est fermé et rangé, et signalez tout dégât."
      },
      phones: {
        title: "Numéros utiles",
        numbers: "Urgence : 112, Réception : [Numéro de réception], Assistance 24h : [Numéro additionnel]."
      }
    }
  },
  zh: {
    nav: {
      howTo: "如何到达",
      arrival: "公寓抵达，第一天",
      rules: "房屋规则",
      recommendations: "建议",
      apartment: "公寓",
      lastDay: "最后一天",
      phones: "重要电话"
    },
    sections: {
      howTo: {
        title: "如何到达",
        instructions: "从El Prat机场：乘坐Aerobus到Plaça Catalunya，然后乘坐出租车或步行到公寓。从Sants火车站：乘坐地铁L5线，在Diagonal站下车，再步行约10分钟。",
        address: "地址：Carrer Aribau 123, Barcelona, 08036"
      },
      arrival: {
        title: "公寓抵达，第一天",
        supplies: "物资：香皂、卫生纸、咖啡、水和软饮料。",
        wifi: "WiFi：名称：'ApartamentoBarcaWiFi'，密码：'Bienvenido123'",
        supermarkets: "附近超市：Bon Preu（Carrer Provença 138），Suma Supermercat（Rosselló 96）。",
        restaurants: "附近餐厅：Soda Bus（Aribau 127），La Bodega de Joan（Aribau 176）。"
      },
      rules: {
        title: "房屋规则",
        content: "公寓内禁止吸烟。请遵守22:00至08:00的安静时段。未经许可不得举办派对或活动。请保持公寓整洁良好。"
      },
      recommendations: {
        title: "建议",
        content: "巴塞罗那景点及活动：参观圣家堂、古埃尔公园、兰布拉大道和哥特区；享受城市海滩和公园，以及其他文化和休闲活动。"
      },
      apartment: {
        title: "公寓",
        description: "现代舒适的空间，设施齐全的厨房，明亮舒适的房间，现代浴室，高速WiFi和带城市景观的露台。",
        address: "地址：Carrer Aribau 123, Barcelona, 08036"
      },
      lastDay: {
        title: "最后一天",
        instructions: "退房指南：将钥匙留在前台或指定邮箱内，确保公寓关闭整洁，并报告任何损坏。"
      },
      phones: {
        title: "重要电话",
        numbers: "紧急情况：112，前台：[前台电话]，24小时服务：[附加电话]。"
      }
    }
  }
};

// Variable para idioma actual (por defecto español)
let currentLanguage = "es";

// Función para actualizar textos en la página según el idioma seleccionado
function updateTranslations() {
  const lang = translations[currentLanguage];

  // Actualizar navegación
  document.getElementById("nav-howTo").textContent = lang.nav.howTo;
  document.getElementById("nav-arrival").textContent = lang.nav.arrival;
  document.getElementById("nav-rules").textContent = lang.nav.rules;
  document.getElementById("nav-recommendations").textContent = lang.nav.recommendations;
  document.getElementById("nav-apartment").textContent = lang.nav.apartment;
  document.getElementById("nav-lastDay").textContent = lang.nav.lastDay;
  document.getElementById("nav-phones").textContent = lang.nav.phones;

  // Actualizar sección: Cómo llegar
  document.getElementById("section-howTo-title").textContent = lang.sections.howTo.title;
  document.getElementById("section-howTo-instructions").textContent = lang.sections.howTo.instructions;
  document.getElementById("section-howTo-address").textContent = lang.sections.howTo.address;

  // Actualizar sección: Llegada
  document.getElementById("section-arrival-title").textContent = lang.sections.arrival.title;
  document.getElementById("section-arrival-supplies").textContent = lang.sections.arrival.supplies;
  document.getElementById("section-arrival-wifi").textContent = lang.sections.arrival.wifi;
  document.getElementById("section-arrival-supermarkets").textContent = lang.sections.arrival.supermarkets;
  document.getElementById("section-arrival-restaurants").textContent = lang.sections.arrival.restaurants;

  // Actualizar sección: Normas de la casa
  document.getElementById("section-rules-title").textContent = lang.sections.rules.title;
  document.getElementById("section-rules-content").textContent = lang.sections.rules.content;

  // Actualizar sección: Recomendaciones
  document.getElementById("section-recommendations-title").textContent = lang.sections.recommendations.title;
  document.getElementById("section-recommendations-content").textContent = lang.sections.recommendations.content;

  // Actualizar sección: El apartamento
  document.getElementById("section-apartment-title").textContent = lang.sections.apartment.title;
  document.getElementById("section-apartment-description").textContent = lang.sections.apartment.description;
  document.getElementById("section-apartment-address").textContent = lang.sections.apartment.address;

  // Actualizar sección: Último día
  document.getElementById("section-lastDay-title").textContent = lang.sections.lastDay.title;
  document.getElementById("section-lastDay-instructions").textContent = lang.sections.lastDay.instructions;

  // Actualizar sección: Teléfonos de interés
  document.getElementById("section-phones-title").textContent = lang.sections.phones.title;
  document.getElementById("section-phones-numbers").textContent = lang.sections.phones.numbers;
}

// Función para mostrar la sección seleccionada y resaltar el enlace activo
function showSection(sectionId) {
  // Ocultar todas las secciones
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });
  // Remarcar enlaces en la barra de navegación
  document.querySelectorAll(".top-nav a").forEach(link => {
    link.classList.remove("active");
  });
  // Mostrar la sección seleccionada
  document.getElementById("section-" + sectionId).classList.add("active");
  // Resaltar el enlace activo
  document.querySelector(`.top-nav a[data-section="${sectionId}"]`).classList.add("active");
}

// Asignar eventos a los botones de idioma
document.querySelectorAll(".sidebar button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLanguage = btn.getAttribute("data-lang");
    updateTranslations();
  });
});

// Asignar eventos a los enlaces de navegación
document.querySelectorAll(".top-nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = link.getAttribute("data-section");
    showSection(section);
  });
});

// Inicialización: actualizar traducciones y mostrar la primera sección por defecto
updateTranslations();
showSection("howTo");

