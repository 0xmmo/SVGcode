import{d as n,m as e,a as o}from"./index.cfd76dce.js";import"./vendor.870df48c.js";const s="window-controls-overlay",a=()=>{navigator.windowControlsOverlay.visible?(e.classList.add(s),o.classList.add(s)):(e.classList.remove(s),o.classList.remove(s))};navigator.windowControlsOverlay.addEventListener("geometrychange",n(async()=>{a()},250));a();