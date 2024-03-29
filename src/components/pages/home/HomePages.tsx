import { useState } from "react";
import scss from "./HomePages.module.scss";
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
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
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
          icon3: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
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
          icon3: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
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
          icon3: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
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
          icon3: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
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
          icon3: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
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
          icon3: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
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
          icon3: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
				isResult: false,
			},
		],
	];
	const [count, setCount] = useState();
	return (
		<div className={scss.homePages}>
			<div className={scss.content}>
				<div className={scss.div1}></div>
				<div className={scss.div2}></div>
			</div>
		</div>
	);
};
