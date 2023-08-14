function a(b) {
  b();
}

function b() {
  console.log('Hello');
}

a(b);
