
        const secondsHandle = document.querySelector('.seconds');
        const minutesHandle = document.querySelector('.minutes');
        const hoursHandle = document.querySelector('.hours');

        function setDate() {
            const now = new Date();
            const second = now.getSeconds();
            const minute = now.getMinutes();
            const hour = now.getHours();

            const moveSecondsDegrees = ((second/60) * 360) + 90;

            secondsHandle.style.transform = `rotate(${moveSecondsDegrees}deg)`;

            const moveMinutesDegrees = ((minute/60) * 360) + 90;

            minutesHandle.style.transform = `rotate(${moveMinutesDegrees}deg)`;

            const moveHoursDegrees = ((hour/12) * 360) + 90;

           hoursHandle.style.transform = `rotate(${moveHoursDegrees}deg)`;

        }

        setInterval(setDate, 1000);
