import tw from "twin.macro"

const Container = tw.div`flex flex-col w-full h-full items-center justify-center`
const H1 = tw.h1`text-zinc-300 text-5xl font-bold`

function Settings() {
	return (
		<Container>
			<H1>Settings</H1>
		</Container>
	)
}

export default Settings
