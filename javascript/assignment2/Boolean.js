// Q5. Boolean Logic Access System
function checkAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  const secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  console.log(secure ? "Secure" : "Unsafe");
}

checkAccess(true, true, true, true);
checkAccess(true, true, false, true);
checkAccess(false, true, true, true);
checkAccess(true, false, true, false);
