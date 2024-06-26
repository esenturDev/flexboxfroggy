import {  useEffect, useState } from "react";
import icon from "../../../assets/skip-left-fill.svg";
import icon2 from "../../../assets/skip-right-fill.svg";
import scss from "./HomePages.module.scss";
import { Input } from "../../Ul/input/Input";
// import Button from "../../Ul/button/Button";

interface TypesLevelArray {
	id: number;
	name: string;
	text: string;
	nameText: string;
	result1: string;
	result2: string;
	result3: string;
	img1: string;
	icon1: string;
	isResult: boolean,
	img2: string,
	img3: string,
	img4: string,
	img5: string,
	icon2: string,
	icon3: string,
	icon4: string,
	icon5: string,
	result11: string,
	result22: string,
}

export const HomePages = () => {
	const LevelArray: TypesLevelArray[][] = [
		[
			{
				id: 1,
				name: "Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям, написав CSS код! Направь этого лягушонка на лилию справа, используя свойство justify-content, которое выравнивает элементы горизонтально и принимает следующие значения:",
				text: "flex-start: элементы выравниваются по левой стороне контейнера. flex-end: элементы выравниваются по правой стороне контейнера. center: элементы выравниваются по центру контейнера. space-between: элементы отображаются с одинаковыми отступами между ними. space-around: элементы отображаются с одинаковыми отступами вокруг них.",
				nameText:
					"Например, justify-content: flex-end; сдвинет лягушонка вправо.",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				icon1:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
				isResult: false,
				img2: "",
				img3: "",
				img4: "",
				img5: "",
				icon2: "",
				icon3: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",

			},
		],

		[
			{
				id: 2,
				name: "Используй justify-content ещё раз, чтобы помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:",
				text: "flex-start: элементы выравниваются по левой стороне контейнера. flex-end: элементы выравниваются по правой стороне контейнера. center: элементы выравниваются по центру контейнера. space-between: элементы отображаются с одинаковыми отступами между ними. space-around: элементы отображаются с одинаковыми отступами вокруг них.",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				isResult: false,
				img3: "",
				img4: "",
				img5: "",
				icon3: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],

		[
			{
				id: 3,
				name: "Помоги всем трём лягушатам найти их лилии, просто используя justify-content. В этот раз у лилий много пространства вокруг.",
				text: "Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтобы посмотреть их. Попробуй навести курсор на justify-content.",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 4,
				name: "Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй justify-content. В этот раз у лилий одинаковое расстояние между ними.",
				text: "",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 5,
				name: "Теперь используй align-items, чтобы помочь лягушатам добраться до нижней части пруда. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения:",
				text: "flex-start: элементы выравниваются по верхнему краю контейнера. flex-end: элементы выравниваются по нижнему краю контейнера. center: элементы выравниваются вертикально по центру контейнера. baseline: элементы отображаются на базовой линии контейнера. stretch: элементы растягиваются, чтобы заполнить контейнер.",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 6,
				name: "Направь лягушонка в центр пруда, используя justify-content и align-items вместе.",
				text: "flex-start: элементы выравниваются по верхнему краю контейнера. flex-end: элементы выравниваются по нижнему краю контейнера. center: элементы выравниваются вертикально по центру контейнера. baseline: элементы отображаются на базовой линии контейнера. stretch: элементы растягиваются, чтобы заполнить контейнер.",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				isResult: false,
				img2: "",
				img3: "",
				img4: "",
				img5: "",
				icon2: "",
				icon3: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 7,
				name: "Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию justify-content и align-items.",
				text: "flex-start: элементы выравниваются по верхнему краю контейнера. flex-end: элементы выравниваются по нижнему краю контейнера. center: элементы выравниваются вертикально по центру контейнера. baseline: элементы отображаются на базовой линии контейнера. stretch: элементы растягиваются, чтобы заполнить контейнер.",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 8,
				name: "Лягушатам нужно выстроиться в том же порядке, что и лилии, используя flex-direction. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:",
				text: "row: элементы размещаются по направлению текста. row-reverse: элементы отображаются в обратном порядке к направлению текста. column: элементы располагаются сверху вниз. column-reverse: элементы располагаются снизу вверх.",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 9,
				name: "Помоги лягушатам расположиться на своих лилиях, используя flex-direction. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения:",
				text: "row: элементы размещаются по направлению текста. row-reverse: элементы отображаются в обратном порядке к направлению текста. column: элементы распологаются сверху вниз. column-reverse: элементы распологаются снизу вверх.",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 10,
				name: "Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, всё же придётся применить и flex-direction, и justify-content, чтобы поместить их на свои лилии.",
				text: "Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 11,
				name: "Помоги лягушатам найти их лилии с помощью flex-direction и justify-content.",
				text: "Заметь, когда в качестве направления выбрана колонка, то justify-content влияет на вертикальное выравнивание, а align-items — на горизонтальное.",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 12,
				name: "Помоги лягушатам найти их лилии с помощью flex-direction и justify-content.",
				text: "",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 13,
				name: "Помоги лягушатам найти их лилии с помощью flex-direction, justify-content и align-items.",
				text: "",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
				result11: "",
				result22: "",
			},
		],
		[
			{
				id: 14,
				name: "Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство order для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.",
				text: "Используй свойство order, чтобы разместить лягушат на своих лилиях.",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				result11: ".yellow {",
				result22: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
				img4: "",
				img5: "",
				icon4: "",
				icon5: "",
			},
		],
		[
			{
				id: 15,
				name: "Используй свойство order, чтобы отправить красного лягушонка на его лилию.",
				text: "",
				nameText: "",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				result11: ".red {",
				result22: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://flexboxfroggy.com/favicon.ico",
				img3: "https://flexboxfroggy.com/favicon.ico",
				img4: "https://flexboxfroggy.com/favicon.ico",
				img5: "https://c8.alamy.com/comp/2M6NX8Y/poison-dart-frog-animal-character-cartoon-illustration-2M6NX8Y.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon3:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon4:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon5:
					"https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
			},
		],
	];
	const [count, setCount] = useState<number>(1);
	const [result1, setResult1] = useState<boolean>(false);
	const [result2, setResult2] = useState<boolean>(false);
	const [result3, setResult3] = useState<boolean>(false);
	const [result4, setResult4] = useState<boolean>(false);
	const [buttonStyleResult, setButtonStyleResult] = useState<boolean>(false);
	const [inputValueResult1, setInputValueResult1] = useState<string>("");
	const [inputValueResult2, setInputValueResult2] = useState<string>("");
	const [inputValueResult3, setInputValueResult3] = useState<string>("");
	const [openDiv, setOpenDiv] = useState<boolean>(false);
	const result = LevelArray.slice(0, 8);
	console.log(result);
	console.log(result4);
	

	const resultIndex = result[0][0];
	const resultIndex2 = result[1][0];
	const resultIndex3 = result[2][0];
	console.log(resultIndex);

	console.log(resultIndex2);

	useEffect(() => {
		if (count === 1) {
			setResult1(true);
			setResult2(false);
			setResult3(false);
			setResult4(false);
		} else if (count === 2) {
			setResult2(true);
			setResult1(false);
			setResult3(false);
			setResult4(false);
		} else if (count === 3) {
			setResult3(true);
			setResult1(false);
			setResult2(false);
			setResult4(false);
		} else if (count === 4) {
			setResult4(true);
			setResult1(false);
			setResult2(false);
			setResult3(false);
		}
	}, [count]);
	if (inputValueResult1 === "flex-end") {
		buttonStyleResult === true;
	} else {
		buttonStyleResult === false;
	}

	useEffect(() => {
		if (inputValueResult1 === "flex-end") {
			setButtonStyleResult(true);
		} else {
			setButtonStyleResult(false);
		}
	}, [inputValueResult1]);
	useEffect(() => {
		if (inputValueResult2 === "center") {
			setButtonStyleResult(true);
		} else {
			setButtonStyleResult(false);
		}
	}, [inputValueResult2]);

	useEffect(() => {
		if (inputValueResult3 === "space-around") {
			setButtonStyleResult(true);
		} else {
			setButtonStyleResult(false);
		}
	}, [inputValueResult3]);

	function countMinues() {
		if (count === 1) {
			setCount(1);
		} else {
			setCount(count - 1);
		}
	}

	return (
		<div className={scss.homePages}>
			<div className={scss.content}>
				<div className={scss.div1}>
					<div className={scss.divHeader}>
						<h2>FLEXBOX FROGGY</h2>
						<div className={scss.divHeaderButtonResult}>
							<img onClick={countMinues} src={icon} alt="icon" />
							<p onClick={() => setOpenDiv(true)}>Уровень {count} из 24</p>
							<img src={icon2} alt="icon" />
						</div>
					</div>
					{openDiv ? (
						<>
							<div className={scss.divLevel}>
								<div
									onClick={() => {
										setCount(1);
										setOpenDiv(false);
									}}>
									1
								</div>
								<div
									onClick={() => {
										setCount(2);
										setOpenDiv(false);
									}}>
									2
								</div>
								<div
									onClick={() => {
										setCount(3);
										setOpenDiv(false);
									}}>
									3
								</div>
								<div
									onClick={() => {
										setCount(4);
										setOpenDiv(false);
									}}>
									4
								</div>
								<div
									onClick={() => {
										setCount(5);
										setOpenDiv(false);
									}}>
									5
								</div>
								<div
									onClick={() => {
										setCount(6);
										setOpenDiv(false);
									}}>
									6
								</div>
								<div
									onClick={() => {
										setCount(7);
										setOpenDiv(false);
									}}>
									7
								</div>
								<div
									onClick={() => {
										setCount(8);
										setOpenDiv(false);
									}}>
									8
								</div>
								<div
									onClick={() => {
										setCount(9);
										setOpenDiv(false);
									}}>
									9
								</div>
								<div
									onClick={() => {
										setCount(10);
										setOpenDiv(false);
									}}>
									10
								</div>
								<div
									onClick={() => {
										setCount(11);
										setOpenDiv(false);
									}}>
									11
								</div>
								<div
									onClick={() => {
										setCount(12);
										setOpenDiv(false);
									}}>
									12
								</div>
								<div
									onClick={() => {
										setCount(13);
										setOpenDiv(false);
									}}>
									13
								</div>
								<div
									onClick={() => {
										setCount(14);
										setOpenDiv(false);
									}}>
									14
								</div>
								<div
									onClick={() => {
										setCount(15);
										setOpenDiv(false);
									}}>
									15
								</div>
								<div
									onClick={() => {
										setCount(16);
										setOpenDiv(false);
									}}>
									16
								</div>
								<div
									onClick={() => {
										setCount(17);
										setOpenDiv(false);
									}}>
									17
								</div>
								<div
									onClick={() => {
										setCount(18);
										setOpenDiv(false);
									}}>
									18
								</div>
								<div
									onClick={() => {
										setCount(19);
										setOpenDiv(false);
									}}>
									19
								</div>
								<div
									onClick={() => {
										setCount(20);
										setOpenDiv(false);
									}}>
									20
								</div>
								<div
									onClick={() => {
										setCount(21);
										setOpenDiv(false);
									}}>
									21
								</div>
								<div
									onClick={() => {
										setCount(22);
										setOpenDiv(false);
									}}>
									22
								</div>
								<div
									onClick={() => {
										setCount(23);
										setOpenDiv(false);
									}}>
									23
								</div>
								<div
									onClick={() => {
										setCount(24);
										setOpenDiv(false);
									}}>
									24
								</div>
							</div>
						</>
					) : null}
					<div className={scss.contentsResult}>
						<div className={scss.divLebal}>
							{result1 ? (
								<>
									<p>{resultIndex.name}</p>
									<p>{resultIndex.text}</p>
									<p>{resultIndex.nameText}</p>
									<div className={scss.formsResults}>
										<p className={scss.p}>{resultIndex.result1}</p>
										<p className={scss.p}>{resultIndex.result2}</p>
										<div className={scss.divForm}>
											<p className={scss.textIsInputLabel}>
												justify-content{" "}
												<Input
													value={inputValueResult1}
													type="text"
													setData={setInputValueResult1}
												/>
											</p>
										</div>
										<div className={scss.buttonDev}>
											<button
												// onClick={() => setButtonStyleResult(true)}
												// onClick={inputValueIsTrue}
												onClick={() => {
													buttonStyleResult === true
														? setCount(count + 1)
														: null;
												}}
												style={
													buttonStyleResult === true
														? {
																transition: "0.5s",
																backgroundColor: "red",
																paddingInline: "1rem",
																paddingBlock: "8px",
														}
														: {
																backgroundColor: "rgba(255, 0, 0, 0.588)",
																paddingInline: "0.9rem",
																paddingBlock: "7px",
																border: "nome",
														}
													// {border: "no"}
												}>
												Далее
											</button>
										</div>
									</div>
								</>
							) : null}
							{result2 ? (
								<>
									<p>{resultIndex2.name}</p>
									<p>{resultIndex2.text}</p>
									{/* <p>{resultIndex2.nameText}</p> */}
									<div className={scss.formsResults}>
										<p className={scss.p}>{resultIndex2.result1}</p>
										<p className={scss.p}>{resultIndex2.result2}</p>
										<div className={scss.divForm}>
											<p className={scss.textIsInputLabel}>
												justify-content{" "}
												<Input
													value={inputValueResult2}
													type="text"
													setData={setInputValueResult2}
												/>
											</p>
										</div>
										<div className={scss.buttonDev}>
											<button
												// onClick={() => setButtonStyleResult(true)}
												// onClick={inputValueIsTrue}
												onClick={() => {
													buttonStyleResult === true
														? setCount(count + 1)
														: null;
												}}
												style={
													buttonStyleResult === true
														? {
																transition: "0.5s",
																backgroundColor: "red",
																paddingInline: "1rem",
																paddingBlock: "8px",
														}
														: {
																backgroundColor: "rgba(255, 0, 0, 0.588)",
																paddingInline: "0.9rem",
																paddingBlock: "7px",
																border: "nome",
														}
													// {border: "no"}
												}>
												Далее
											</button>
										</div>
									</div>
								</>
							) : null}
							{result3 ? (
								<>
									<p>{resultIndex3.name}</p>
									<p>{resultIndex3.text}</p>
									{/* <p>{resultIndex2.nameText}</p> */}
									<div className={scss.formsResults}>
										<p className={scss.p}>{resultIndex3.result1}</p>
										<p className={scss.p}>{resultIndex3.result2}</p>
										<div className={scss.divForm}>
											<p className={scss.textIsInputLabel}>
												justify-content{" "}
												<Input
													value={inputValueResult3}
													type="text"
													setData={setInputValueResult3}
												/>
											</p>
										</div>
										<p className={scss.p}>{resultIndex3.result3}</p>
										<div className={scss.buttonDev}>
											<button
												// onClick={() => setButtonStyleResult(true)}
												// onClick={inputValueIsTrue}
												onClick={() => {
													buttonStyleResult === true
														? setCount(count + 1)
														: null;
												}}
												style={
													buttonStyleResult === true
														? {
																transition: "0.5s",
																backgroundColor: "red",
																paddingInline: "1rem",
																paddingBlock: "8px",
														}
														: {
																backgroundColor: "rgba(255, 0, 0, 0.588)",
																paddingInline: "0.9rem",
																paddingBlock: "7px",
																border: "nome",
														}
													// {border: "no"}
												}>
												Далее
											</button>
										</div>
									</div>
								</>
							) : null}
						</div>
					</div>
				</div>
				<div className={scss.div2}>
					<div className={scss.divDispleyResult}>
						<div className={scss.Map}>
							{result1 === true ? (
								<>
									<div
										style={{
											display: "flex",
											justifyContent: inputValueResult1,
										}}>
										<img
											style={{
												width: "9rem",
												height: "9rem",
												position: "relative",
												zIndex: "2",
												// display: "flex",

												// justifyContent: inputValueResult1,
											}}
											className={scss.img1}
											src={resultIndex.img1}
											alt="img1"
										/>
									</div>
									<img
										className={scss.icon1}
										src={resultIndex.icon1}
										alt="icon1"
									/>
								</>
							) : null}
							{result2 === true ? (
								<>
									<div
										style={{
											display: "flex",
											justifyContent: inputValueResult2,
											// flexDirection: "row-reverse",
										}}>
										<img
											style={{
												width: "9rem",
												height: "9rem",
												position: "relative",
												// left: "-36rem",
												right: "1rem",
												zIndex: "2",
												// display: "flex",

												// justifyContent: inputValueResult1,
											}}
											className={scss.img1}
											src={resultIndex2.img1}
											alt="img1"
										/>
										<img
											style={{
												width: "9rem",
												height: "9rem",
												position: "relative",
												right: "1rem",
												zIndex: "2",
												borderRadius: "50%",
												// display: "flex",
												// justifyContent: inputValueResult1,
											}}
											className={scss.img1}
											src={resultIndex2.img2}
											alt="img1"
										/>
									</div>
									<img
										style={{
											position: "relative",
											bottom: "8rem",
											left: "12rem",
											width: "9.4rem",
											height: "9.4rem",
											borderRadius: "50%",
										}}
										src={resultIndex2.icon1}
										alt="icon1"
									/>
									<img
										// className={scss.icon1}
										style={{
											position: "relative",
											bottom: "8rem",
											left: "12rem",
											width: "9.4rem",
											height: "9.4rem",
											borderRadius: "50%",
										}}
										src={resultIndex2.icon2}
										alt="icon1"
									/>
								</>
							) : null}
							{result3 === true ? (
								<>
									<div
										style={{
											display: "flex",
											justifyContent: inputValueResult3,
											// flexDirection: "row-reverse",
										}}>
										<img
											style={{
												width: "9rem",
												height: "9rem",
												position: "relative",
												// left: "-36rem",
												right: "1rem",
												zIndex: "2",
												// display: "flex",

												// justifyContent: inputValueResult1,
											}}
											className={scss.img1}
											src={resultIndex3.img1}
											alt="img1"
										/>
										<img
											style={{
												width: "9rem",
												height: "9rem",
												position: "relative",
												right: "1rem",
												zIndex: "2",
												borderRadius: "50%",
												// display: "flex",
												// justifyContent: inputValueResult1,
											}}
											className={scss.img1}
											src={resultIndex3.img2}
											alt="img1"
										/>
										<img
											style={{
												width: "9rem",
												height: "9rem",
												position: "relative",
												right: "1rem",
												zIndex: "2",
												borderRadius: "50%",
												// display: "flex",
												// justifyContent: inputValueResult1,
											}}
											className={scss.img1}
											src={resultIndex3.img3}
											alt="img1"
										/>
									</div>
									<div
										style={{
											display: "flex",
											justifyContent: "space-evenly",
											position: "relative",
											top: "-1rem",
											right: "13rem",
										}}>
										<img
											style={{
												position: "relative",
												bottom: "8rem",
												left: "12rem",
												width: "9.4rem",
												height: "9.4rem",
												borderRadius: "50%",
											}}
											src={resultIndex3.icon1}
											alt="icon1"
										/>
										<img
											// className={scss.icon1}
											style={{
												position: "relative",
												bottom: "8rem",
												left: "12rem",
												width: "9.4rem",
												height: "9.4rem",
												borderRadius: "50%",
											}}
											src={resultIndex3.icon2}
											alt="icon1"
										/>
										<img
											// className={scss.icon1}
											style={{
												position: "relative",
												bottom: "8rem",
												left: "12rem",
												width: "9.4rem",
												height: "9.4rem",
												borderRadius: "50%",
											}}
											src={resultIndex3.icon3}
											alt="icon1"
										/>
									</div>
								</>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
