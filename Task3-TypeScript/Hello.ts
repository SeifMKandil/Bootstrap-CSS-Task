            var level: number = 1;
            var numImages: number = 4;
            var uniqueImageIndex: number = 0;

            void function createImage(imagePath: string, x: number, y: number, isUnique: boolean, screenWidth: number, screenHeight: number): HTMLImageElement {
                const container: HTMLDivElement = document.createElement('div');
                const vl: HTMLDivElement = document.createElement('div');

                vl.className = "vl"
                container.className = "flex-child";

                const img: HTMLImageElement = document.createElement('img');
                img.src = imagePath;
                img.style.position = "absolute";
                img.style.width = "80px";
                img.style.top = y + "px";
                img.style.left = x + "px";

                container.appendChild(img);
                container.appendChild(vl)
                document.querySelector('.left-panel')?.appendChild(container);

                if (!isUnique) {
                    const mirroredImg: HTMLImageElement = document.createElement('img');
                    mirroredImg.src = imagePath;
                    mirroredImg.style.position = "absolute";
                    mirroredImg.style.width = "80px";
                    mirroredImg.style.top = y + "px";
                    mirroredImg.style.left = (screenWidth - x - 80) + "px";

                    container.appendChild(mirroredImg);
                } else {
                    img.classList.add("unique-image");
                    img.style.cursor = "pointer";
                    img.addEventListener('click', () => {
                        level++;
                        numImages++;
                        uniqueImageIndex = Math.floor(Math.random() * numImages);
                        alert('Congratulations! Moving to Level ' + level);
                        resetGame();
                        Game();
                    });
                }

                return img;
            }

           void function resetGame() {
                const leftPanel = document.querySelector('.left-panel');
                if (leftPanel) {
                    leftPanel.innerHTML = '';
                }
            }

            void function Game() {
                const screenWidth: number = window.innerWidth;
                const screenHeight: number = window.innerHeight;
                console.log(screenWidth, screenHeight);

                const images: string[] = ["./imgs/Face.png", './imgs/Face1.png', './imgs/Face2.png', './imgs/Face3.png', './imgs/Face4.png', './imgs/Face5.png', './imgs/Face6.png', './imgs/Face7.png', './imgs/Face8.png', './imgs/Face9.png'];

                for (let i = 0; i < numImages; i++) {
                    const imagePath: string = images[i];
                    const randomY: number = Math.random() * (screenHeight - 180);
                    const randomX: number = Math.random() * ((screenWidth / 2) - 180);

                    createImage(imagePath, randomX, randomY, i === uniqueImageIndex, screenWidth, screenHeight);
                }
            }

            Game();
        