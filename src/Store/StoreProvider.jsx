import React, { createContext, useState } from 'react';

import pcoweb1 from '../img/pcoweb1.png'
import pcoweb2 from '../img/pcoweb2.png'
import pcoweb3 from '../img/pcoweb3.png'
import pcoweb4 from '../img/pcoweb4.png'
import pcoweb5 from '../img/pcoweb5.png'
import pcoweb6 from '../img/pcoweb6.png'
import hmi1 from '../img/hmi1.png'
import hmi2 from '../img/hmi2.png'
import hmi3 from '../img/hmi3.png'
import hmi4 from '../img/hmi4.png'
import hmi5 from '../img/hmi5.png'
import hmi6 from '../img/hmi6.png'

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    
    const pCOWebImagesState = [
        { src: pcoweb1, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb2, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb3, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb4, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb5, altText: 'Wizualizacja - pCOWeb' },
        { src: pcoweb6, altText: 'Wizualizacja - pCOWeb' },
      ]

     const hmiImagesState = [
        { src: hmi1,    altText: 'Wizualizacja - hmi'    },
        { src: hmi2,    altText: 'Wizualizacja - hmi'    },
        { src: hmi3,    altText: 'Wizualizacja - hmi'    },
        { src: hmi4,    altText: 'Wizualizacja - hmi'    },
        { src: hmi5,    altText: 'Wizualizacja - hmi'    },
        { src: hmi6,    altText: 'Wizualizacja - hmi'    },
      ]

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
                listIcon: 'js',
                listHeader: 'JavaScript',
                listDescr: 'VanillaJS & jQuery for manipulate the data , AJAX for read/write data from/to PLC(pCOWeb Card)', 
              },        
                    ],
          isAddDivider: true,
          addDividerKeywords: 'Live React Demo',
          addListIcon: 'react',
          addListHeader: 'React',
          addListDescr: ['I have prepared (in my house) the PLC with modern visualization based on the newest technologies like:','- Node-RED for backend (with Modbus-RTU RS-485 communication for data fetching)', ' - ReactJS with React-Router< framework for frontend.', 'Please contact me if you interessted to see source and how it works.']
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


        const skillsState =
        {
          headerIcon: 'wrench',
          headerContent: 'Skills & Experiences',
          dividerKeywords: 'Some of posible usefeul skills which I have for you and yours work are listed below.',
          listIcons: [
              {
                listIcon: 'tablet alternate',
                listHeader: 'Visualization of control processes like HVAC, transportation, or other items manipulation',
                listDescr: "I'm experienced with VIPA panels, Carel pGDT Touch panels, web visualization at pCOWeb systems",
              },
              {
                listIcon: 'computer',
                listHeader: 'Web & Mobile applications',
                listDescr: "I've used some technologies and frameworks like HTML, CSS, Javascript, jQuery, React (with Router, Material-UI, Semantic-UI, and many other plugins), Vue, Bootstrap, Sass, Node-RED,", 
              },
              {
                listIcon: 'microchip',
                listHeader: 'PLC programming',
                listDescr: 'I have kinda experience with programming of PLC machines like Siemens S7-200/300/1200, EATON Easy or Mitsubishi FX. In Addition, I can easy learn how to use the environment of any new proggrammable controller if I needed to.', 
              },
              {
                listIcon: 'tags',
                listHeader: 'Quality assurance and tests',
                listDescr: "I've manually tested many applications used in HVAC environment, comparing the funcionality of programmable controlles with the company standards and the clients guidelines(assumptions) and/or documentation", 
              },   
              {
                listIcon: 'key',
                listHeader: 'Designing automation systems',
                listDescr: "I have much experience in Computer-Aided Designing for automation systems, like a AutoCAD, PCSchematic(a program like EPLAN). Making an technical documentation (DTR) from zero to end.",
              },   
              {
                listIcon: 'laptop',
                listHeader: 'Computers, office devices, network and graphic issuses',
                listDescr: "I have some experience with computers, starting from assembling the PC from the parts (e.g. CPU or RAMs), through the using the computers (e.g. MS Windows, MS Office, Internet Viewers, GIMP/Photoshop/Inkscape for graphics, configuring the networks and routers), office and industrial devices like printers, marker printers too, ending to developing the code in MS Visual Studio or Brackets.", 
              },   
              {
                listIcon: 'legal',
                listHeader: 'Manually skills',
                listDescr: "I know how to use the tools, including power tools, and know some techniques to do manual things, for example assembling the automation or... simply kitchen, cabinets :P ", 
              },   
              {
                listIcon: 'user circle',
                listHeader: 'Foreign tongues',
                listDescr: "My mother tongue is polish, but I know english in a enough level to understanding the technical docuemtation of devices and frameworks", 
              },   

                    ],
          isAddDivider: false,
          addDividerKeywords: '',
          addListIcon: '',
          addListHeader: '',
          addListDescr: '',
              }

              const aboutMeState =
              {
                headerIcon: 'spy',
                headerContent: 'Information - About me',
                dividerKeywords: [
                    "Hi! I'm Krzysztof Meyer and I'm aspire to be front-end developer, and this is my Portfolio.",
                    "You can see there a litle sight of my works of years in companies when I worked after studies, and, there are also newest projects in modern technologies (React, Vue, Node-RED).",
                    "Some years ago, i finished the engineers and master studys in electro-automation, and i worked in this, in HVAC industry section, but I decided to change work in my life so... let's go, IT waits!",
                    "Why? Because... I had satisfaction in making a visualization of automation processes, what, in short, is a kind of front-end develompent (with a back-end from programming controller's hardware and software), not exactly the same actual technology, but still yes",
                    "So, here I am, the visualizations of my web had HTML/CSS/JS, so I know something about this, and, I learned more and more... and, maybe, more enough to start the new work? new Adventures and, hehe, new Problems?"
                ],
                labelItems: [
                  { labelIcon: 'cogs', labelColor: 'blue', labelName: "Automation", },
                  { labelIcon: 'cog', labelColor: 'blue', labelName: "Siemens S7", },
                  { labelIcon: 'microchip', labelColor: 'blue', labelName: "S7-200",  },
                  { labelIcon: 'microchip', labelColor: 'blue', labelName: "S7-300",  },
                  { labelIcon: 'microchip', labelColor: 'blue', labelName: "S7-1200", },
                  { labelIcon: 'microchip', labelColor: 'blue', labelName: "VIPA", },
                  { labelIcon: 'cog', labelColor: 'blue', labelName: "Mitsubishi FX", },
                  { labelIcon: 'cog', labelColor: 'blue', labelName: "Carel pCO", },
                  { labelIcon: 'microchip', labelColor: 'blue', labelName: "pCOWeb", },
                  { labelIcon: 'microchip', labelColor: 'blue', labelName: "pGDTouch (pGDT)", },
                  
                  { labelIcon: 'lightning',labelColor: 'teal', labelName: "Inverters", },
                  { labelIcon: 'power cord',labelColor: 'teal', labelName: "Lenze i510/550", },
                  { labelIcon: 'power cord',labelColor: 'teal', labelName: "ABB ACS310", },
                  { labelIcon: 'power cord',labelColor: 'teal', labelName: "EURA E800", },
                  { labelIcon: 'power cord',labelColor: 'teal', labelName: "LG iG5A/iC5A",},

                  { labelIcon: 'mobile alternate', labelColor: 'violet', labelName: "IT Technology", },
                  { labelIcon: 'html5', labelColor: 'violet', labelName: "HTML", },
                  { labelIcon: 'css3', labelColor: 'violet', labelName: "CSS", },
                  { labelIcon: 'js', labelColor: 'violet', labelName: "JavaScript", },
                  { labelIcon: 'react', labelColor: 'violet', labelName: "React", },
                  { labelIcon: 'vuejs', labelColor: 'violet', labelName: "VueJS", },
                  { labelIcon: 'code branch', labelColor: 'violet', labelName: "Node-RED", },
                  
                  { labelIcon: 'computer', labelColor: 'purple', labelName: "CAD's", },
                  { labelIcon: 'crop', labelColor: 'purple', labelName: "AutoCAD", },
                  { labelIcon: 'crop', labelColor: 'purple', labelName: "PC Schematic", },
                  { labelIcon: 'crop', labelColor: 'purple', labelName: "SEE Electrical", },
                  { labelIcon: 'crop', labelColor: 'purple', labelName: "EPLAN", },

                  { labelIcon: 'compose', labelColor: 'brown', labelName: "Other skills", },
                  { labelIcon: 'user', labelColor: 'brown', labelName: "Analytic thinking", },
                  { labelIcon: 'user plus', labelColor: 'brown', labelName: "Fast learning", },
                  { labelIcon: 'user plus', labelColor: 'brown', labelName: "Ambition", },
                  
                  { labelIcon: 'microphone', labelColor: 'grey', labelName: "Tongues", },
                  { labelIcon: 'microphone', labelColor: 'grey', labelName: "Polish", },
                  { labelIcon: 'microphone', labelColor: 'grey', labelName: "English", },

                  
                ]
              }

              const contactState =
              {
                headerIcon: 'call square',
                headerContent: 'Contact',
                dividerKeywords: 'if you are interessted to any form of cooperation with me, there is a some contact listed below.',
                listIcons: [
                    {
                      listIcon: 'mail',
                      listHeader: 'meact@wp.pl',
                      listDescr: "If you want to mail me, there is mail adress in Wirtualna Polska domain. Or you can directly send a message with a form on a right side ->", 
                    },
                    {
                      listIcon: 'facebook',
                      listHeader: 'fb.com/vkmstudio',
                      listDescr: 'There is my facebook fanpage. You should like it! Or you can, simply, message me.', 
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


    const [pCOWebImages, setPCOWebImages] = useState(pCOWebImagesState);
    const [hmiImages, setHmiImages] = useState(hmiImagesState);
    const [pCOWebProjects, setPCOWebProjects] = useState(pCOWebProjectsState);
    const [hmiProjects, setHmiProjects] = useState(hmiProjectsState);

    const [skills, setSkills] = useState(skillsState);
    const [aboutMe, setAboutMe] = useState(aboutMeState);

    const [contact, setContact] = useState(contactState);
    const [contactFormInfo, setContactFormInfo] = useState(contactFormInfoState);

    const [contactForm, setContactForm] = useState(contactFormState);

    const [ModalOpen, setModalOpen] = useState(false);
    const [ModalImage, setModalImage] = useState('');

    const [contactRef, setContactRef] = useState();                    

    console.log(JSON.stringify(aboutMeState));


        // useEffect(() => {
        //     setPCOWebImages(store.pCOWebImages) 
        //     setHmiImages(store.hmiImages)
        //     setPCOWebProjects(store.pCOWebProjects)
        // }, []);
        

return (
    <StoreContext.Provider value={{
        pCOWebImages,
        setPCOWebImages,
        hmiImages,
        setHmiImages, 
        pCOWebProjects,
        setPCOWebProjects,
        hmiProjects,
        setHmiProjects,
        skills,
        setSkills,
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
