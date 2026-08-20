const names=["Scarlett","Mia","Lola","Ava","Sofia","Chloe","Luna","Bella","Aria","Zoe","Layla","Maya","Nina","Ivy","Gia","Ruby","Jade","Elle","Ana","Lucy","Mila","Eva","Tia","Leah","Kira","Nora","Lily","Skye","Rose","Tessa"];
const colors=[["#fb98c8","#9edcff"],["#ffc0df","#c6a7ee"],["#8ed7f7","#f397c2"],["#f4b5d5","#8bcdec"],["#d2a6e8","#ffb1cf"],["#ff87ba","#b5e7fb"]];

function demoPhoto(name,index){
  const [a,b]=colors[index%colors.length],initials=name.slice(0,2);
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="800" height="1000" fill="url(#g)"/><text x="400" y="520" text-anchor="middle" font-family="Georgia" font-size="170" font-style="italic" fill="white" fill-opacity=".72">${initials}</text><text x="750" y="950" text-anchor="end" font-family="Arial" font-size="32" fill="white">${index+1}</text></svg>`;
  return {url:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`,publicId:`demo-${name.toLowerCase()}-${index+1}`};
}

function citySlug(city){return city.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}

export function makeDemoProfiles(city,state){return names.map((name,i)=>({
  slug:`demo-${citySlug(city)}-${name.toLowerCase()}`,name,email:`${name.toLowerCase()}@example.com`,phone:city==="Seattle"?"(206) 555-0184":"(323) 555-0184",city,state,
  bio:`I'm a ${city}-based model available for fashion, beauty, lifestyle and creative projects. I'm professional, punctual and excited to work with local photographers and brands.`,
  nationality:"American",height:"5'8\"",weight:"125 lbs",eyeColor:"Brown",hairColor:"Brunette",measurements:"34–25–36",age:25,availableTo:"Travel · Shoot · Events",subscriptionStatus:"active",isDemo:true,
  photos:Array.from({length:10},(_,photo)=>demoPhoto(name,photo+i)),video:null
}))}

export const demoCities=[
  {city:"Los Angeles",state:"California"},
  {city:"Seattle",state:"Washington"}
];
export const demoProfiles=makeDemoProfiles("Los Angeles","California");
export const allDemoProfiles=demoCities.flatMap(({city,state})=>makeDemoProfiles(city,state));
export const demoProfilesFor=(city,state)=>allDemoProfiles.filter(profile=>profile.city.toLowerCase()===city.toLowerCase()&&profile.state.toLowerCase()===state.toLowerCase());
export const findDemoProfile=slug=>allDemoProfiles.find(profile=>profile.slug===slug);
