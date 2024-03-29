import { useEffect, useState } from "react";
import icon from "../../../assets/skip-left-fill.svg";
import icon2 from "../../../assets/skip-right-fill.svg";
import scss from "./HomePages.module.scss";
import { Input } from "../../Ul/input/Input";
import Button from "../../Ul/button/Button";

export const HomePages = () => {
	const LevelArray = [
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
			},
		],

		[
			{
				id: 2,
				name: "Используй justify-content ещё раз, чтобы помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:",
				text: "flex-start: элементы выравниваются по левой стороне контейнера. flex-end: элементы выравниваются по правой стороне контейнера. center: элементы выравниваются по центру контейнера. space-between: элементы отображаются с одинаковыми отступами между ними. space-around: элементы отображаются с одинаковыми отступами вокруг них.",
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
			},
		],

		[
			{
				id: 3,
				name: "Помоги всем трём лягушатам найти их лилии, просто используя justify-content. В этот раз у лилий много пространства вокруг.",
				text: "Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтобы посмотреть их. Попробуй навести курсор на justify-content.",
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
			},
		],
		[
			{
				id: 4,
				name: "Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй justify-content. В этот раз у лилий одинаковое расстояние между ними.",
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
			},
		],
		[
			{
				id: 5,
				name: "Теперь используй align-items, чтобы помочь лягушатам добраться до нижней части пруда. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения:",
				text: "flex-start: элементы выравниваются по верхнему краю контейнера. flex-end: элементы выравниваются по нижнему краю контейнера. center: элементы выравниваются вертикально по центру контейнера. baseline: элементы отображаются на базовой линии контейнера. stretch: элементы растягиваются, чтобы заполнить контейнер.",
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
			},
		],
		[
			{
				id: 6,
				name: "Направь лягушонка в центр пруда, используя justify-content и align-items вместе.",
				text: "flex-start: элементы выравниваются по верхнему краю контейнера. flex-end: элементы выравниваются по нижнему краю контейнера. center: элементы выравниваются вертикально по центру контейнера. baseline: элементы отображаются на базовой линии контейнера. stretch: элементы растягиваются, чтобы заполнить контейнер.",
				result1: "#pond {",
				result2: "display: flex;",
				result3: "}",
				img1: "https://flexboxfroggy.com/favicon.ico",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				isResult: false,
			},
		],
		[
			{
				id: 7,
				name: "Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию justify-content и align-items.",
				text: "flex-start: элементы выравниваются по верхнему краю контейнера. flex-end: элементы выравниваются по нижнему краю контейнера. center: элементы выравниваются вертикально по центру контейнера. baseline: элементы отображаются на базовой линии контейнера. stretch: элементы растягиваются, чтобы заполнить контейнер.",
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
			},
		],
		[
			{
				id: 8,
				name: "Лягушатам нужно выстроиться в том же порядке, что и лилии, используя flex-direction. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:",
				text: "row: элементы размещаются по направлению текста. row-reverse: элементы отображаются в обратном порядке к направлению текста. column: элементы располагаются сверху вниз. column-reverse: элементы располагаются снизу вверх.",
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
			},
		],
		[
			{
				id: 9,
				name: "Помоги лягушатам расположиться на своих лилиях, используя flex-direction. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения:",
				text: "row: элементы размещаются по направлению текста. row-reverse: элементы отображаются в обратном порядке к направлению текста. column: элементы распологаются сверху вниз. column-reverse: элементы распологаются снизу вверх.",
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
			},
		],
		[
			{
				id: 10,
				name: "Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, всё же придётся применить и flex-direction, и justify-content, чтобы поместить их на свои лилии.",
				text: "Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.",
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
			},
		],
		[
			{
				id: 11,
				name: "Помоги лягушатам найти их лилии с помощью flex-direction и justify-content.",
				text: "Заметь, когда в качестве направления выбрана колонка, то justify-content влияет на вертикальное выравнивание, а align-items — на горизонтальное.",
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
			},
		],
		[
			{
				id: 12,
				name: "Помоги лягушатам найти их лилии с помощью flex-direction и justify-content.",
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
			},
		],
		[
			{
				id: 13,
				name: "Помоги лягушатам найти их лилии с помощью flex-direction, justify-content и align-items.",
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
			},
		],
		[
			{
				id: 14,
				name: "Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство order для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.",
				text: "Используй свойство order, чтобы разместить лягушат на своих лилиях.",
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
			},
		],
		[
			{
				id: 15,
				name: "Используй свойство order, чтобы отправить красного лягушонка на его лилию.",
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
	const result = LevelArray.slice(0, 8);
	console.log(result);

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

	// function buttonStyle() {

	// 	resultIndex.isResult === true;
	// 	// if (inputValueResult1 === "flex-end") {
	// 	// 	resultIndex.isResult === true;
	// 	// } else {
	// 	// 	resultIndex.isResult === false;
	// 	// }
	// }

	// useEffect(() => {
	// 	if (inputValueResult1 === "flex-end") {
	// 		buttonStyleResult === true;
	// 	} else {
	// 		buttonStyleResult === false;
	// 	}
	// }, [inputValueResult1]);

	// useEffect(() => {
	// 	if(buttonStyleResult === true) {
	// 		resultIndex.isResult === true;
	// 	} else if(buttonStyleResult === false) {
	// 		resultIndex.isResult === false;
	// 	}
	// } , [buttonStyleResult])

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

	return (
		<div className={scss.homePages}>
			<div className={scss.content}>
				<div className={scss.div1}>
					<div className={scss.divHeader}>
						<h2>FLEXBOX FROGGY</h2>
						<div className={scss.divHeaderButtonResult}>
							<img onClick={() => setCount(count - 1)} src={icon} alt="icon" />
							<p>Уровень {count} из 24</p>
							<img src={icon2} alt="icon" />
						</div>
					</div>
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
												<input
													value={inputValueResult1}
													type="text"
													onChange={(e) => setInputValueResult1(e.target.value)}
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
								</>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
