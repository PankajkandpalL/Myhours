import { Box, Button, Icon, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const ImageSectionComponent = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState(images[0]);
	const [currentIndex, setCurrentIndex] = useState({ start: 0, end: 4 });

	const showNextImages = () => {
		if (currentIndex.end >= images.length - 1) return;
		setCurrentIndex((prev) => ({
			...prev,
			start: prev.start + 4,
			end: prev.end + 4,
		}));
	};
	const showPreviousImages = () => {
		if (currentIndex.start <= 0) return;
		setCurrentIndex((prev) => ({
			...prev,
			start: prev.start - 4,
			end: prev.end - 4,
		}));
	};

	return (
		<Stack
			direction={"row"}
			justifyContent={"center"}
			gap={4}
			alignItems="center">
			<Stack gap={"10px"}>
				<IconButton onClick={showPreviousImages} variant={"outlined"}>
					<AiOutlineUp />
				</IconButton>
				{images
					.slice(currentIndex.start, currentIndex.end)
					.map((src, index) => {
						return (
							<Box
								key={index}
								onMouseOver={() => {
									setSelectedImage(src);
								}}
								border="1px solid black"
								borderRadius="10px"
								overflow={"hidden"}>
								<Image
									placeholder="blur"
									blurDataURL={src}
									src={src}
									width={64}
									height={64}
								/>
							</Box>
						);
					})}
				<IconButton onClick={showNextImages}>
					<AiOutlineDown />
				</IconButton>
			</Stack>
			<Box>
				<Image src={selectedImage} width={256} height={256} />
			</Box>
			{/* <Typography>Individual Image</Typography> */}
		</Stack>
	);
};

export default ImageSectionComponent;
