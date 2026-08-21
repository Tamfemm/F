const names=["Scarlett","Mia","Lola","Ava","Sofia","Chloe","Luna","Bella","Aria","Zoe","Layla","Maya","Nina","Ivy","Gia","Ruby","Jade","Elle","Ana","Lucy","Mila","Eva","Tia","Leah","Kira","Nora","Lily","Skye","Rose","Tessa"];
const colors=[["#fb98c8","#9edcff"],["#ffc0df","#c6a7ee"],["#8ed7f7","#f397c2"],["#f4b5d5","#8bcdec"],["#d2a6e8","#ffb1cf"],["#ff87ba","#b5e7fb"]];

function demoPhoto(name,index){
  const [a,b]=colors[index%colors.length],initials=name.slice(0,2);
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="800" height="1000" fill="url(#g)"/><text x="400" y="520" text-anchor="middle" font-family="Georgia" font-size="170" font-style="italic" fill="white" fill-opacity=".72">${initials}</text><text x="750" y="950" text-anchor="end" font-family="Arial" font-size="32" fill="white">${index+1}</text></svg>`;
  return {url:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`,publicId:`demo-${name.toLowerCase()}-${index+1}`};
}

const makeSlug=(state,city,name)=>`demo-${Buffer.from(JSON.stringify([state,city,name])).toString("base64url")}`;

export function getDemoProfiles(state,city){return names.map((name,i)=>({
  slug:makeSlug(state,city,name),name,email:`${name.toLowerCase()}@example.com`,phone:"(323) 555-0184",city,state,
  bio:`I'm a ${city}-based model available for fashion, beauty, lifestyle and creative projects. I'm professional, punctual and excited to work with local photographers and brands.`,
  nationality:"American",height:"5'8\"",weight:"125 lbs",eyeColor:"Brown",hairColor:"Brunette",measurements:"34–25–36",age:25,availableTo:"Travel · Shoot · Events",subscriptionStatus:"active",isDemo:true,
  photos:Array.from({length:10},(_,photo)=>demoPhoto(name,photo+i)),video:null
}))}

export function findDemoProfile(slug){try{if(!slug.startsWith("demo-"))return null;const[state,city,name]=JSON.parse(Buffer.from(slug.slice(5),"base64url").toString());return getDemoProfiles(state,city).find(profile=>profile.name===name)||null}catch{return null}}
