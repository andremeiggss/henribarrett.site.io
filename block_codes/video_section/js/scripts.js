const maskElement = document.querySelector('.mask');
const scrollThresholds = {
    growStart: 0,
    growEnd: 3,
    shrinkStart: 4,
    shrinkEnd: 5,
};

const sizes = {
    initial: { width: 432, height: 385 },
    max: { width: 1712, height: 678 },
    final: { width: 468, height: 207 },
};

const positions = {
    initial: 30,
    center: 50,
    final: 10,
};

const calculateProgress = (current, start, end) =>
    Math.min(Math.max((current - start) / (end - start), 0), 1);

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY / window.innerHeight;

    let width, height, top;

    if (scrollY <= scrollThresholds.growEnd) {
        const progress = calculateProgress(scrollY, scrollThresholds.growStart, scrollThresholds.growEnd);
        width = sizes.initial.width + (sizes.max.width - sizes.initial.width) * progress;
        height = sizes.initial.height + (sizes.max.height - sizes.initial.height) * progress;
        top = positions.initial - (positions.initial - positions.center) * progress;
    } else if (scrollY <= scrollThresholds.shrinkEnd) {
        const progress = calculateProgress(scrollY, scrollThresholds.shrinkStart, scrollThresholds.shrinkEnd);
        width = sizes.max.width - (sizes.max.width - sizes.final.width) * progress;
        height = sizes.max.height - (sizes.max.height - sizes.final.height) * progress;
        top = positions.center + (positions.final - positions.center) * progress;
    } else {
        width = sizes.final.width;
        height = sizes.final.height;
        top = positions.final;
    }

    maskElement.style.width = `${width}px`;
    maskElement.style.height = `${height}px`;
    maskElement.style.top = `${top}%`;
});
