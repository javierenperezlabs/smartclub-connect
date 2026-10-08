import { createFileRoute } from '@tanstack/react-router';
import { Actions } from '@/components/smartclub/workspace';
export const Route = createFileRoute('/acciones')({head:()=>({meta:[{title:'Centro de acciones · SmartClub'},{name:'description',content:'Revisa y aprueba beneficios personalizados para tus clientes.'},{property:'og:title',content:'Centro de acciones · SmartClub'},{property:'og:description',content:'Revisa y aprueba beneficios personalizados para tus clientes.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:Actions});
