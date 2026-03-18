export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" })
}

const data = req.body

const WEBHOOK = "https://discord.com/api/webhooks/1483709752130404482/5kY0r-v2Ao1bp-GKAOOlPdNmfhzZ7RSEpLry1na7ciEyEmLf_j16FmkId64IpQeQObl_"

const payload = {
embeds: [
{
title: data.title || "🌟 BRAINROT DETECTADO",
description: data.description || "",
color: 65280,
image: data.image ? { url: data.image } : undefined
}
]
}

await fetch(WEBHOOK,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(payload)
})

res.status(200).json({status:"sent"})

}
