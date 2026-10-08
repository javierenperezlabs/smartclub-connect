import { createFileRoute } from '@tanstack/react-router';
import { Customers } from '@/components/smartclub/workspace';
export const Route = createFileRoute('/clientes')({head:()=>({meta:[{title:'Clientes · SmartClub'},{name:'description',content:'Perfil, comportamiento e intención de los clientes SmartClub.'},{property:'og:title',content:'Clientes · SmartClub'},{property:'og:description',content:'Perfil, comportamiento e intención de los clientes SmartClub.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:Customers});
