import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Link from 'next/link'
import Image from 'next/image'

export default function ClientsCards({ data }) {
	const [clients, setClients] = useState([])

	useEffect(() => {
		if (data) setClients(data?.clients.nodes)
	}, [data])

	//const clients = data?.clients?.nodes

	//console.log(clients);

	return <div>{clients.map(client => {})}</div>
}
