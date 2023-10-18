const Jumat = () => {
	return (
		<>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Penjaskes</div>
				<div className="flex justify-center items-center text-sm">07.00-08.55</div>
			</div>
			<div
				className=" flex justify-between py-[0.50rem] w-72 px-3 opacity-60"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Prakarya</div>
				<div className="flex justify-center items-center text-sm">08.55-10.20</div>
			</div>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="700">
				<div className="w-[50%] text-base  font-medium">Kimia</div>
				<div className="flex justify-center items-center text-sm">10.20-11.30</div>
			</div>
		</>
	)
}

export default Jumat
