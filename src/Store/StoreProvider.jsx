import React, { createContext, useState } from 'react';

import pcoweb1 from '../img/pcoweb1.png'
import pcoweb2 from '../img/pcoweb2.png'
import pcoweb3 from '../img/pcoweb3.png'
import pcoweb4 from '../img/pcoweb4.png'
import pcoweb5 from '../img/pcoweb5.png'
import pcoweb6 from '../img/pcoweb6.png'
import pcoweb7 from '../img/pcoweb7.png'
import pcoweb8 from '../img/pcoweb8.png'
import hmi1 from '../img/hmi1.png'
import hmi2 from '../img/hmi2.png'
import hmi3 from '../img/hmi3.png'
import hmi4 from '../img/hmi4.png'
import hmi5 from '../img/hmi5.png'
import hmi6 from '../img/hmi6.png'
import ds1 from '../img/ds1.png'
import ds2 from '../img/ds2.png'
import ds3 from '../img/ds3.png'
import vue1 from '../img/vue1.png'
import vue2 from '../img/vue2.png'
import vue3 from '../img/vue3.png'
import vue4 from '../img/vue4.png'

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    
    const pCOWebImagesState = [
        { src: pcoweb1, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb2, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb3, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb4, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb5, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb6, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb7, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb8, altText: 'Wizualizacja - pCOWeb' },
      ]

     const hmiImagesState = [
        { src: hmi1,    altText: 'Wizualizacja - hmi'    },
        { src: hmi2,    altText: 'Wizualizacja - hmi'    },
        { src: hmi3,    altText: 'Wizualizacja - hmi'    },
        { src: hmi4,    altText: 'Wizualizacja - hmi'    },
        { src: hmi5,    altText: 'Wizualizacja - hmi'    },
        { src: hmi6,    altText: 'Wizualizacja - hmi'    },
      ]

      const desertShopImagesState = [
        { src: ds1,    altText: 'Wizualizacja - desert shop'    },
        { src: ds2,    altText: 'Wizualizacja - desert shop'    },
        { src: ds3,    altText: 'Wizualizacja - desert shop'    },
      ]

      const vueImagesState = [
        { src: vue1,    altText: 'Wizualizacja - vue'    },
        { src: vue2,    altText: 'Wizualizacja - vue'    },
        { src: vue3,    altText: 'Wizualizacja - vue'    },
        { src: vue4,    altText: 'Wizualizacja - vue'    },
      ]
      const desertShopProjectsState =
        {
          headerIcon: 'shop',
          headerContent: 'Desert Shop',
          dividerKeywords: 'This is the MERN Stack project represent the music shop with top albums of 2020 year in stoner/psychedelic/pagan folk genres',
          listIcons: [
              {
                listIcon: 'database',
                listHeader: 'MongoDB',
                listDescr: 'MongoDB (non-related database) for storing the products, orders and users', 
              },
              {
                listIcon: 'node',
                listHeader: 'Express',
                listDescr: 'express.js for server scripts (back-end for this project)', 
              },
              {
                listIcon: 'react',
                listHeader: 'React',
                listDescr: 'A javascript library for front-end to this project', 
              }, 
              {
                listIcon: 'node js',
                listHeader: 'Node.js',
                listDescr: 'A javascript environment for running this entire project', 
              },  
              {
                listIcon: 'sass',
                listHeader: 'Sass',
                listDescr: 'Sass is the preprocessor of CSS, for the visual styles of the site', 
              },            
                    ],
          isAddDivider: true,
          addDividerKeywords: 'Live Desert Shop',
          addListIcon: 'react',
          addListHeader: 'React',
          addListDescr: ['There is a live project on the herokuapp server, including the technologies listed above'],
          addDividerLink: 'http://desert-shop.herokuapp.com/',
        }

     const pCOWebProjectsState =
        {
          headerIcon: 'computer',
          headerContent: 'Visualization - pCOWeb',
          dividerKeywords: 'Visualization of Carel programmable controller for HVAC.Technologies used listed below.',
          listIcons: [
              {
                listIcon: 'microchip',
                listHeader: 'pCOWeb',
                listDescr: 'Carel pCOWeb provides http server and many more functionalities like mailbot, alarms, logger, admin panel',
              },
              {
                listIcon: 'html5',
                listHeader: 'HTML5',
                listDescr: 'HTML is primary functionality of www page used for Visualization', 
              },
              {
                listIcon: 'css3 alternate',
                listHeader: 'CSS3',
                listDescr: 'CSS used for styling elements', 
              },
              {
                listIcon: 'sass',
                listHeader: 'Sass',
                listDescr: 'Sass is the preprocessor of CSS, for the visual styles of the site (in React version)', 
              },            
              {
                listIcon: 'js',
                listHeader: 'JavaScript',
                listDescr: 'VanillaJS & jQuery for manipulate the data , AJAX for read/write data from/to PLC(pCOWeb Card)', 
              }, 
              {
                listIcon: 'react',
                listHeader: 'React',
                listDescr: 'In some pCOWebs, there are the new technology, react & sass version', 
              },               
                    ],
          isAddDivider: true,
          addDividerKeywords: 'Live React visualization',
          addListIcon: 'react',
          addListHeader: 'React',
          addListDescr: ['There is the newest version of the visualization with technologies like:',' - ReactJS for frontent framework, with React-Router library for navigation', '- Sass (CSS preprocessor) for more elastic and efficiency Cascading style sheets'],
          addDividerLink: 'http://176.123.60.10:6680/http/build/',
        }

        const hmiProjectsState =
        {
          headerIcon: 'tablet alternate',
          headerContent: 'Visualization - HMI',
          dividerKeywords: 'Visualization of Carel programmable controller for HVAC. Technologies used listed below.',
          listIcons: [
            {
              listIcon: 'microchip',
              listHeader: 'pGDTouch',
              listDescr: 'Carel pGDTouch is an device which provides a Visualization and many more functionalities like alarms, logger, admin panel in one device mounted for standard in a automatic cabinets',
            },
            {
              listIcon: 'code branch',
              listHeader: 'RS-485',
              listDescr: 'Serial communication with PLC and HMI is probider by RS-485 protocol', 
            },
                    ],
          isAddDivider: false,
          addDividerKeywords: '',
          addListIcon: '',
          addListHeader: '',
          addListDescr: ''
        }

        const vueProjectsState =
        {
          headerIcon: 'tablet alternate',
          headerContent: 'Visualization - Boiler control',
          dividerKeywords: 'Visualization of control of Boiler - i.e. beer making process, about Siemens S7-1200 programmable controller, Node-RED for Back-end and Vue.js+bootstrap on Front-end.',
          listIcons: [
            {
              listIcon: 'microchip',
              listHeader: 'Siemens S7-1200',
              listDescr: 'The PLC for controlling the heating system of the beer boiler',
            },
            {
              listIcon: 'code branch',
              listHeader: 'Node-RED',
              listDescr: 'Node-RED is a back-end platform which support industrial communication protocols - i.e S7-Connection with Siemens S7-1200 to obtain a data for control and monitoring.',
            },
            {
              listIcon: 'vuejs',
              listHeader: 'Vue.js',
              listDescr: 'Node-RED also provides the UI-builder (comes with Vue.js and Bootstrap Front-end libraries) which was used to visualise the beer making process.', 
            },
                    ],
          isAddDivider: false,
          addDividerKeywords: '',
          addListIcon: '',
          addListHeader: '',
          addListDescr: ''
        }

              const aboutMeState =
              {
                headerIcon: 'spy',
                headerContent: "Hi!, I'm Krzysztof Meyer and this is my Portfolio.",
                listIcons: [
                  {
                    listIcon: 'folder open',
                    listHeader: 'Site Content',
                    listDescr: "You can see there some projects which I create in companies when I worked after studies (for HVAC environment), and, there are also my personal-training-useful newest projects in modern technologies (React, Vue, Node-RED, Node.js, Express, MongoDB, Sass).", 
                  },   
                     {
                    listIcon: 'student',
                    listHeader: 'Education & Experience',
                    listDescr:  "Some years ago, I finished the engineer and master grade studys in electro-automation, and I worked in this, in HVAC industry section, but I decided to change work in my life so... let's go, IT waits!",
                  },   
                     {
                    listIcon: 'terminal',
                    listHeader: 'Perspectives and...',
                    listDescr:  "Why? Because I had a great satisfaction in making a visualization of automation processes, what, in short, is a kind of front-end develompent (with a back-end from programmable controller - PLC), not exactly the same actual technology, but... still the same philosophy",
                  },   
                     {
                    listIcon: 'code',
                    listHeader: '...the new life-road?',
                    listDescr: "So, here I am, the visualizations of my web had HTML/CSS/JS, so I know something about this, and, I learned more and more... and, maybe, more enough to start the new work? new Adventures and, hehe, new Problems?"
                  },   
                        ],


                cardHeaderIcon: 'wrench',
                cardHeaderContent: 'Skills / Abilities / Technologies',
                cardItems: [
                  { cardItemName: 'Automation',
                    cardItemClassName: 'skillsCardAutomation',
                    cardItemHeaderIsInverted: true,
                    cardItemIconName: 'cogs',
                    cardLabelItems: [
                                      { labelIcon: 'cog', labelColor: 'black', labelName: "Siemens S7", },
                                      { labelIcon: 'microchip', labelColor: 'black', labelName: "S7-200",  },
                                      { labelIcon: 'microchip', labelColor: 'black', labelName: "S7-300",  },
                                      { labelIcon: 'microchip', labelColor: 'black', labelName: "S7-1200", },
                                      { labelIcon: 'microchip', labelColor: 'black', labelName: "VIPA", },
                                      { labelIcon: 'cog', labelColor: 'black', labelName: "Mitsubishi FX", },
                                      { labelIcon: 'cog', labelColor: 'black', labelName: "Carel pCO", },
                                      { labelIcon: 'microchip', labelColor: 'black', labelName: "pCOWeb", },
                                      { labelIcon: 'microchip', labelColor: 'black', labelName: "pGDTouch", },
                                    ],
                  },
                  { cardItemName: 'Inverters',
                    cardItemClassName: 'skillsCardInverters',
                    cardItemHeaderIsInverted: true,
                    cardItemIconName: 'lightning',
                    cardLabelItems: [
                                      { labelIcon: 'power cord',labelColor: 'teal', labelName: "Lenze i510/550", },
                                      { labelIcon: 'power cord',labelColor: 'teal', labelName: "ABB ACS310", },
                                      { labelIcon: 'power cord',labelColor: 'teal', labelName: "EURA E800", },
                                      { labelIcon: 'power cord',labelColor: 'teal', labelName: "LG iG5A/iC5A",},
                                    ],
                  },
                  { cardItemName: 'IT Technology',
                    cardItemClassName: 'skillsCardITTechnology',
                    cardItemHeaderIsInverted: false,
                    cardItemIconName: 'mobile alternate',
                    cardLabelItems: [
                                      { labelIcon: 'html5', labelColor: 'violet', labelName: "HTML", },
                                      { labelIcon: 'css3', labelColor: 'violet', labelName: "CSS", },
                                      { labelIcon: 'js', labelColor: 'violet', labelName: "JavaScript", },
                                      { labelIcon: 'react', labelColor: 'violet', labelName: "React", },
                                      { labelIcon: 'vuejs', labelColor: 'violet', labelName: "VueJS", },
                                      { labelIcon: 'code branch', labelColor: 'violet', labelName: "Node-RED", },
                                      { labelIcon: 'database', labelColor: 'violet', labelName: "MongoDB", },
                                      { labelIcon: 'node', labelColor: 'violet', labelName: "Node.js", },
                                      { labelIcon: 'node js', labelColor: 'violet', labelName: "Express.js", },
                                    ],
                  },
                  { cardItemName: "CAD's & Others",
                    cardItemClassName: 'skillsCardCADs',
                    cardItemHeaderIsInverted: true,
                    cardItemIconName: 'computer',
                    cardLabelItems: [
                                      { labelIcon: 'crop', labelColor: 'purple', labelName: "AutoCAD", },
                                      { labelIcon: 'crop', labelColor: 'purple', labelName: "PC Schematic", },
                                      { labelIcon: 'crop', labelColor: 'purple', labelName: "SEE Electrical", },
                                      { labelIcon: 'crop', labelColor: 'purple', labelName: "EPLAN", },
                                    ],
                  },
                  { cardItemName: 'Personal Skills',
                    cardItemClassName: 'skillsCardOthers',
                    cardItemHeaderIsInverted: true,
                    cardItemIconName: 'compose',
                    cardLabelItems: [
                                      { labelIcon: 'user', labelColor: 'brown', labelName: "Analytic thinking", },
                                      { labelIcon: 'user plus', labelColor: 'brown', labelName: "Fast learning", },
                                      { labelIcon: 'user plus', labelColor: 'brown', labelName: "Ambition", },
                                    ],
                  }
                ],
              }

              const contactState =
              {
                headerIcon: 'call square',
                headerContent: 'Contact',
                dividerKeywords: 'if you are interessted to any form of cooperation with me, there is a some contact listed below.',
                listIcons: [
                    {
                      listIcon: 'mail',
                      listHeader: 'vkmstudiox@gmail.com',
                      listDescr: "If you want to mail me, there is mail adress in Google domain. Or you can directly send a message with a form below this section.", 
                    },
                    {
                      listIcon: 'mail',
                      listHeader: 'meact@wp.pl',
                      listDescr: 'If you want a polish mail, in Wirtualna Polska, you are welcome', 
                    },
                          ],

                headerMailIcon: 'mail',
                headerMailContent: 'Contact Form',
                dividerMailKeywords: 'if you are interessted to any form of cooperation with me, there is a some contact listed below.',     
                isAddDivider: false,
                addDividerKeywords: 'Copright',
                addListIcon: 'copyright',
                addListHeader: 'Copyrighted by VKM Studio',
                addListDescr: '2020',
                    }

                    const contactFormInfoState =
                    {
                      headerIcon: 'mail',
                      headerContent: 'Contact Form',
                      dividerKeywords: 'if you are interessted to any form of cooperation with me, there is a some contact listed below.',   
                          }

                    const contactFormState =
                          {
                      name: '',
                      subject: '',
                      email: '3',   
                      message: '4',
                          }

   
    
    const [desertShopImages, setDesertShopWebImages] = useState(desertShopImagesState);
    const [pCOWebImages, setPCOWebImages] = useState(pCOWebImagesState);
    const [hmiImages, setHmiImages] = useState(hmiImagesState);
    const [vueImages, setVueImages] = useState(vueImagesState);

    const [desertShopProjects, setDesertShopProjects] = useState(desertShopProjectsState);
    const [pCOWebProjects, setPCOWebProjects] = useState(pCOWebProjectsState);
    const [hmiProjects, setHmiProjects] = useState(hmiProjectsState);
    const [vueProjects, setVueProjects] = useState(vueProjectsState);

    const [aboutMe, setAboutMe] = useState(aboutMeState);

    const [contact, setContact] = useState(contactState);
    const [contactFormInfo, setContactFormInfo] = useState(contactFormInfoState);

    const [contactForm, setContactForm] = useState(contactFormState);
  
    const [ModalOpen, setModalOpen] = useState(false);
    const [ModalImage, setModalImage] = useState('');

    const [contactRef, setContactRef] = useState();                    

return (
    <StoreContext.Provider value={{
        desertShopImages, 
        setDesertShopWebImages,
        pCOWebImages,
        setPCOWebImages,
        hmiImages,
        setHmiImages, 
        vueImages,
        setVueImages,

        desertShopProjects,
        setDesertShopProjects,
        pCOWebProjects,
        setPCOWebProjects,
        hmiProjects,
        setHmiProjects,
        vueProjects,
        setVueProjects,

        aboutMe,
        setAboutMe, 
        contact,
        setContact,
        contactFormInfo,
        setContactFormInfo,

        contactForm,
        setContactForm, 

        ModalOpen, 
        setModalOpen,
        ModalImage,
        setModalImage,

        contactRef,
        setContactRef
    }}>
        {children}
  </StoreContext.Provider>
    );

};

export default StoreProvider;
