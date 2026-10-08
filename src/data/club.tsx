import { createContext, useContext, useState, type ReactNode } from 'react';

export type Status = 'context' | 'pending' | 'approved' | 'completed' | 'rejected' | 'stable';
export type Customer = { id: string; name: string; initials: string; email: string; since: string; brand: string; category: string; frequency: number; ticket: number; other: number; goal: string; note: string; status: Status; points: number; events: string[] };
export const initialCustomers: Customer[] = [
 {id:'SC-001',name:'María González',initials:'MG',email:'maria.gonzalez@example.com',since:'2021',brand:'Farmacias Económicas',category:'Bienestar y vitaminas',frequency:-32,ticket:24.80,other:27,goal:'',note:'',status:'context',points:1240,events:['Cambio de frecuencia detectado · hoy','Compra en Medicity · 26 sep','Compra en Farmacias Económicas · 12 sep']},
 {id:'SC-002',name:'Carlos Mendoza',initials:'CM',email:'carlos.mendoza@example.com',since:'2022',brand:'Farmacias Económicas',category:'Cuidado personal',frequency:-24,ticket:32.50,other:35,goal:'',note:'',status:'context',points:850,events:['Actividad creciente en Medicity · hoy','Compra en Medicity · 2 oct']},
 {id:'SC-003',name:'Ana Rodríguez',initials:'AR',email:'ana.rodriguez@example.com',since:'2020',brand:'Wellderma',category:'Dermocosmética',frequency:-21,ticket:48.90,other:0,goal:'Mantener mi marca',note:'Prefiero mis productos habituales y mantener la calidad.',status:'pending',points:2160,events:['Preferencia de marca confirmada · hoy','Acción preparada por Repurchase Agent · hoy']},
 {id:'SC-004',name:'Diego Torres',initials:'DT',email:'diego.torres@example.com',since:'2023',brand:'Medicity',category:'Bienestar',frequency:-28,ticket:19.60,other:12,goal:'Encontrarlo rápido',note:'Quiero recoger mi compra cerca del trabajo.',status:'pending',points:620,events:['Prioridad de conveniencia confirmada · hoy','Acción preparada por Repurchase Agent · hoy']},
 {id:'SC-005',name:'Lucía Fernández',initials:'LF',email:'lucia.fernandez@example.com',since:'2021',brand:'Mascotas',category:'Cuidado de mascotas',frequency:4,ticket:36.20,other:3,goal:'Aprovechar promociones',note:'',status:'stable',points:1790,events:['Comportamiento estable · hoy','Compra en Mascotas · 4 oct']},
];
export const statusLabels: Record<Status,string> = {context:'Necesita contexto',pending:'Por aprobar',approved:'Beneficio disponible',completed:'Recompra realizada',rejected:'Descartada',stable:'Sin intervención'};
export const goals = ['Ahorrar','Mantener mi marca','Encontrarlo rápido','Aprovechar promociones'];
export function recommendation(c: Customer) {
 if(c.goal==='Mantener mi marca') return {title:'15% en su marca habitual',detail:'Beneficio en productos de cuidado personal de su marca preferida.',short:'15% de descuento',code:'MARCA15'};
 if(c.goal==='Encontrarlo rápido') return {title:'Reserva y retiro sin espera',detail:'Preparar sus productos habituales para retiro en la farmacia elegida.',short:'Retiro prioritario',code:'RETIROSC'};
 return {title:c.goal==='Aprovechar promociones'?'20% en su próxima compra':'15% en bienestar y vitaminas',detail:'Un beneficio en su categoría habitual, sin cambiar los productos que prefiere.',short:c.goal==='Aprovechar promociones'?'20% de descuento':'15% de descuento',code:'SMART15'};
}
export const purchases = [{date:'26 sep 2026',brand:'Medicity',product:'Cuidado personal',amount:28.50},{date:'12 sep 2026',brand:'Farmacias Económicas',product:'Vitaminas y suplementos',amount:24.80},{date:'28 ago 2026',brand:'Farmacias Económicas',product:'Bienestar',amount:26.90},{date:'15 ago 2026',brand:'Wellderma',product:'Protección solar',amount:34.50}];
type ClubContext = { customers: Customer[]; selectedId: string; select: (id:string)=>void; update: (id:string, patch:Partial<Customer>,event:string)=>void; reset:()=>void };
const Context = createContext<ClubContext | null>(null);
export function ClubProvider({children}:{children:ReactNode}) { const [customers,setCustomers]=useState(initialCustomers); const [selectedId,select]=useState('SC-001');
 const update = (id:string,patch:Partial<Customer>,event:string)=>setCustomers(old=>old.map(c=>c.id===id?{...c,...patch,events:[`${event} · ahora`,...c.events]}:c));
 return <Context.Provider value={{customers,selectedId,select,update,reset:()=>setCustomers(initialCustomers)}}>{children}</Context.Provider>;
}
export function useClub(){const context=useContext(Context);if(!context) throw new Error('ClubProvider required');return context;}
