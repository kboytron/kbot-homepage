import sev from '../public/images/works/sev.webp'
import linkbox from '../public/images/works/linkbox.webp'
import flRecords from '../public/images/works/flRecords.webp'
import dkstrad from '../public/images/works/dktrad.webp'
import mp4 from '../public/images/works/tree.webp'
import mp5 from '../public/images/works/liststack.webp'
import scene from '../public/images/works/scene.webp'
import chat from '../public/images/works/simpleChat.webp'
import app from '../public/images/works/cieApp.webp'
import pscrip from '../public/images/works/pscrip.webp'
import asr from '../public/images/works/asr.webp'
import mct from '../public/images/works/mct.webp'

export const homeContent = {
  name: 'Karan Singh',
  heroMessage:
    'Hello, I’m a Software Engineer at Wells Fargo!',
  subtitle: 'Software Engineer ( AI / Full-stack / Cloud )',
  profileImage: '/images/karan.jpg',
  workSummary:
    'Karan is a software engineer based in Atlanta with a passion for AI, backend systems, and clean data workflows. He enjoys solving practical problems, building tools that help teams move faster, and applying thoughtful automation to reduce manual work. Outside of technology, he enjoys basketball and weightlifting.',
  bio: [
    { year: '2002', text: 'Born in Mumbai, India' },
    { year: '2020', text: 'Founded MUTCoinTeam' },
    { year: '2023', text: 'Won Best Data Visualization at HackUIowa' },
    { year: '2023', text: 'Data Engineer Intern at 8AMApp' },
    { year: '2024', text: 'Graduated from the University of Iowa' },
    { year: '2025 to present', text: 'Software Engineer II at Wells Fargo' }
  ],
  interests: ['Basketball', 'Weightlifting', 'Stock Trading'],
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/kboytron',
      handle: '@kboytron',
      type: 'github'
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/kboytron',
      handle: '@kboytron',
      type: 'twitter'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/karansingh2/',
      handle: '@karansingh2',
      type: 'linkedin'
    }
  ]
}

export const workItems = [
  {
    id: 'solarenergyviz',
    title: 'SolarEnergyViz.tech',
    thumbnail: sev,
    description: 'Illuminating the benefits of solar energy through data-driven insights.'
  },
  {
    id: 'mct',
    title: 'MUTCoinTeam',
    thumbnail: mct,
    description: 'SaaS platform for in-game currency trading with automation and secure backend.'
  },
  {
    id: 'dijkstraduel',
    title: 'Dijkstra Duel',
    thumbnail: dkstrad,
    description: 'Implemented and compared two versions of Dijkstra’s algorithm.'
  },
  {
    id: 'asr',
    title: 'SpeechServe',
    thumbnail: asr,
    description: 'End-to-end speech recognition system using CTC and DNN.'
  },
  {
    id: 'pscrip',
    title: 'Postscript Interpreter',
    thumbnail: pscrip,
    description: 'Haskell based PostScript interpreter for 2D vector graphics with Cairo.'
  },
  {
    id: 'chatSystem',
    title: 'Simple Chat',
    thumbnail: chat,
    description: 'A messaging system featuring chat clients and a directory server.'
  },
  {
    id: 'treePlotter',
    title: 'Tree Plotter',
    thumbnail: mp4,
    description: 'A binary tree plotter written in assembly with dynamic size.'
  },
  {
    id: 'dynamicListStack',
    title: 'ListStack-SMAL',
    thumbnail: mp5,
    description: 'A liststack implementation utilizing polymorphism and dynamic memory management.'
  },
  {
    id: 'flightRecords',
    title: 'Flight Records',
    thumbnail: flRecords,
    description: 'A scalable query system for large flight datasets using sets and maps.'
  },
  {
    id: 'linkbox',
    title: 'Linkbox',
    thumbnail: linkbox,
    description: 'LinkTree like page with animated background.'
  },
  {
    id: 'scenePainter',
    title: 'Scene Painter',
    thumbnail: scene,
    description: 'A drawing application using objects and polymorphism.'
  },
  {
    id: 'cieSocialApp',
    title: 'CIE Social App',
    thumbnail: app,
    description: 'C++ social app for managing user profiles, posts, and connections.'
  }
]
