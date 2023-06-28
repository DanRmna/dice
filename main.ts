function Start () {
    basic.showNumber(randint(1, 6))
}
input.onGesture(Gesture.Shake, function () {
    Start()
})
