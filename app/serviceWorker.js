if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let m={};const o=e=>a(e,d),b={module:{uri:d},exports:m,require:o};i[d]=Promise.all(r.map((e=>b[e]||o(e)))).then((e=>(s(...e),m)))}}define(["./workbox-9d06fa15"],(function(e){"use strict";e.setCacheNameDetails({prefix:"itk-vtk-viewer-"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"124.itkVtkViewer.js",revision:"99038064588643947ff3e4f4a91e1c02"},{url:"1754c2974e1acffb2b7a.js",revision:null},{url:"itk/image-io/BMPImageIO-read-image.js",revision:"a435b6540c01481ece19b10d2bbec8ca"},{url:"itk/image-io/BMPImageIO-read-image.umd.js",revision:"758d3d5ab929432c6a34b041fc2d0fb3"},{url:"itk/image-io/BMPImageIO-write-image.js",revision:"df7c7ca048929e2338d24919061fde02"},{url:"itk/image-io/BMPImageIO-write-image.umd.js",revision:"e41b0c238132e2686ca91ad1bf87de63"},{url:"itk/image-io/BioRadImageIO-read-image.js",revision:"625eb992b07e784c6d828d6fc5d34e98"},{url:"itk/image-io/BioRadImageIO-read-image.umd.js",revision:"b950139d248a7cf6d5025f18b6f3d3fe"},{url:"itk/image-io/BioRadImageIO-write-image.js",revision:"549dc5b6963b831cda2eb1c227583222"},{url:"itk/image-io/BioRadImageIO-write-image.umd.js",revision:"90f8f136379a9b5ab96c6e970aa05337"},{url:"itk/image-io/FDFImageIO-read-image.js",revision:"3051575dbc2cc3f2539dbe007bd4201f"},{url:"itk/image-io/FDFImageIO-read-image.umd.js",revision:"0aac2282ea3760278a07a121f6e75a85"},{url:"itk/image-io/FDFImageIO-write-image.js",revision:"56bb26d4ac1d95562a875be24bcc77d9"},{url:"itk/image-io/FDFImageIO-write-image.umd.js",revision:"5c2020ee7c8f1e62046bf95011fb0d04"},{url:"itk/image-io/GDCMImageIO-read-image.js",revision:"1c200d75a96125e4873afdf95794995a"},{url:"itk/image-io/GDCMImageIO-read-image.umd.js",revision:"456af506dc89534ffabbe74f845d5b7d"},{url:"itk/image-io/GDCMImageIO-write-image.js",revision:"206649367c476f957ab5074afc60736d"},{url:"itk/image-io/GDCMImageIO-write-image.umd.js",revision:"adeb05e2ad578d93355134c14521671b"},{url:"itk/image-io/GE4ImageIO-read-image.js",revision:"4777408e201491251ba508e6d9372627"},{url:"itk/image-io/GE4ImageIO-read-image.umd.js",revision:"42a094d1169b15a727f71e0fb0d23fbf"},{url:"itk/image-io/GE4ImageIO-write-image.js",revision:"974d3152ad4507c8ed17a7fda1cfe40b"},{url:"itk/image-io/GE4ImageIO-write-image.umd.js",revision:"d1c0adbf4f041e798ef093a9113554b2"},{url:"itk/image-io/GE5ImageIO-read-image.js",revision:"080597005a785003df767e74ae16fb5d"},{url:"itk/image-io/GE5ImageIO-read-image.umd.js",revision:"7e271db29cb893f0c32bcafda89e2490"},{url:"itk/image-io/GE5ImageIO-write-image.js",revision:"e3ef928675fa4c569bed2551865178d0"},{url:"itk/image-io/GE5ImageIO-write-image.umd.js",revision:"7917e7b2cf3f1515623e064f84be5e39"},{url:"itk/image-io/GEAdwImageIO-read-image.js",revision:"fed3268c6b2b670142493c1777f21e0f"},{url:"itk/image-io/GEAdwImageIO-read-image.umd.js",revision:"e9bab66d8d5062cf336c7212be0372e2"},{url:"itk/image-io/GEAdwImageIO-write-image.js",revision:"698d3b1eec0ba79966bb6d20d1a62222"},{url:"itk/image-io/GEAdwImageIO-write-image.umd.js",revision:"634d5ae30663ca05ef63ab2946ac023d"},{url:"itk/image-io/GiplImageIO-read-image.js",revision:"f09477923ba4bc33678b01ea1e10a6ba"},{url:"itk/image-io/GiplImageIO-read-image.umd.js",revision:"6f07ddebc3f269d4abcfc8e59694b0e0"},{url:"itk/image-io/GiplImageIO-write-image.js",revision:"365cbb62977ae82f0ed6ee6bfe81a20c"},{url:"itk/image-io/GiplImageIO-write-image.umd.js",revision:"a0088166bb00825a0bfc6d7134067c11"},{url:"itk/image-io/HDF5ImageIO-read-image.js",revision:"b97ec0f407b5850c64b483a085ea1f23"},{url:"itk/image-io/HDF5ImageIO-read-image.umd.js",revision:"2169e3bfb99c4ec8f312c92000dfce07"},{url:"itk/image-io/HDF5ImageIO-write-image.js",revision:"c694b2fb47aa43fffb879e87f19bff1f"},{url:"itk/image-io/HDF5ImageIO-write-image.umd.js",revision:"62a48eaac3d9c385bc5efd3e28897694"},{url:"itk/image-io/JPEGImageIO-read-image.js",revision:"136ae99c6111457ecb8ba34dc4784be0"},{url:"itk/image-io/JPEGImageIO-read-image.umd.js",revision:"b4c28fcf993c8cd03b82ae9dbd54230e"},{url:"itk/image-io/JPEGImageIO-write-image.js",revision:"9b13f7e2897d8519c55acc17c7464fa2"},{url:"itk/image-io/JPEGImageIO-write-image.umd.js",revision:"cb73d1d51507e8362ee1a4805382ccfa"},{url:"itk/image-io/LSMImageIO-read-image.js",revision:"1cc846e8b99eed199f23894933b5fe7f"},{url:"itk/image-io/LSMImageIO-read-image.umd.js",revision:"746b91d67b990d4940620e303e299e01"},{url:"itk/image-io/LSMImageIO-write-image.js",revision:"5be25f4947ac34b2c9b1f29af14c18c0"},{url:"itk/image-io/LSMImageIO-write-image.umd.js",revision:"3fdb3fd59a4bc6510f385b9be1ae67b4"},{url:"itk/image-io/MGHImageIO-read-image.js",revision:"168223922da2248c09abfa03d93570ef"},{url:"itk/image-io/MGHImageIO-read-image.umd.js",revision:"a82346b2c9e8675eaf9dee72bd2d60bc"},{url:"itk/image-io/MGHImageIO-write-image.js",revision:"83ddea9481c1368127464fe3e111b38e"},{url:"itk/image-io/MGHImageIO-write-image.umd.js",revision:"8afb3784f5895b8cd5febe6ca487b768"},{url:"itk/image-io/MINCImageIO-read-image.js",revision:"aca377f0f77368900ebbc09f2ff861b1"},{url:"itk/image-io/MINCImageIO-read-image.umd.js",revision:"3f9248798693d5af874414141cc963f7"},{url:"itk/image-io/MINCImageIO-write-image.js",revision:"623148e31134a6e18397d9e22bce6b8f"},{url:"itk/image-io/MINCImageIO-write-image.umd.js",revision:"06c0f01415885785ef97b688dfbb5ab7"},{url:"itk/image-io/MRCImageIO-read-image.js",revision:"3fa4eac132e7749b2d54b34c615562ba"},{url:"itk/image-io/MRCImageIO-read-image.umd.js",revision:"e3b050092668977d78b1e7e06c1eafa0"},{url:"itk/image-io/MRCImageIO-write-image.js",revision:"ecac7b02d2cdf3940fd2f2df14c3e6e4"},{url:"itk/image-io/MRCImageIO-write-image.umd.js",revision:"9cecd3c312978997fab21e5bb7fa2bed"},{url:"itk/image-io/MetaImageIO-read-image.js",revision:"4c829aac363cf35b3a6595dda5d40a78"},{url:"itk/image-io/MetaImageIO-read-image.umd.js",revision:"1aebed53c517b0b6f9aadce6cbcedf7d"},{url:"itk/image-io/MetaImageIO-write-image.js",revision:"bfa8f9eb0434c0f70218b56ce7cc2716"},{url:"itk/image-io/MetaImageIO-write-image.umd.js",revision:"b6279662f33877754aff0cd6958a315f"},{url:"itk/image-io/NiftiImageIO-read-image.js",revision:"f1507fe29cbb24197e50706e12179da9"},{url:"itk/image-io/NiftiImageIO-read-image.umd.js",revision:"d1a7d3970175702091783dcf87ba36e5"},{url:"itk/image-io/NiftiImageIO-write-image.js",revision:"67d399ed9c89b1b74ce6964f6d2bf268"},{url:"itk/image-io/NiftiImageIO-write-image.umd.js",revision:"2464eccc9f0340a1f5fdc8a51562ff4e"},{url:"itk/image-io/NrrdImageIO-read-image.js",revision:"29edd2cce7f276d5bedcc3ea80efc07a"},{url:"itk/image-io/NrrdImageIO-read-image.umd.js",revision:"0e43cf93a17b9c60ebdaa3da32a8ce9a"},{url:"itk/image-io/NrrdImageIO-write-image.js",revision:"fef1a9a72f4fddc644afe9d3217b05e5"},{url:"itk/image-io/NrrdImageIO-write-image.umd.js",revision:"1c5d4e35efac0d480bf785fbb7a0c18e"},{url:"itk/image-io/PNGImageIO-read-image.js",revision:"0505d68730d983711a296e5164e650ac"},{url:"itk/image-io/PNGImageIO-read-image.umd.js",revision:"d4873c10a9ce5d561259db30fe8f01b3"},{url:"itk/image-io/PNGImageIO-write-image.js",revision:"3b5afa8fdcdff4642bfa509faf577d63"},{url:"itk/image-io/PNGImageIO-write-image.umd.js",revision:"724360516e2a822e69c91c8f8fb2eb1a"},{url:"itk/image-io/ScancoImageIO-read-image.js",revision:"35691031108640ab69ec83e46a7ba9da"},{url:"itk/image-io/ScancoImageIO-read-image.umd.js",revision:"5aa711bbd83d44ce4fc77fe77ac7dec5"},{url:"itk/image-io/ScancoImageIO-write-image.js",revision:"476796f428e8ee540d3c559ad638d1b8"},{url:"itk/image-io/ScancoImageIO-write-image.umd.js",revision:"c9aed47e5830787bd03707b658efe5e3"},{url:"itk/image-io/TIFFImageIO-read-image.js",revision:"19e6ae5a37730f87460ce1986a5867f0"},{url:"itk/image-io/TIFFImageIO-read-image.umd.js",revision:"1d88f5574e861e40a6ec9383bf6d6092"},{url:"itk/image-io/TIFFImageIO-write-image.js",revision:"244e902a6970a9fae6ed7d791aa02a3d"},{url:"itk/image-io/TIFFImageIO-write-image.umd.js",revision:"18224dc3426d798838033ca9a1865666"},{url:"itk/image-io/VTKImageIO-read-image.js",revision:"658ae987d45bbbdfe18bb247c22e4056"},{url:"itk/image-io/VTKImageIO-read-image.umd.js",revision:"e910a0010097d28260b6d14fe25a6691"},{url:"itk/image-io/VTKImageIO-write-image.js",revision:"3cc9bc9e5da1650801b4d333ddfd1918"},{url:"itk/image-io/VTKImageIO-write-image.umd.js",revision:"4e71bd8b08f1c8622feb8fb8affdfd43"},{url:"itk/image-io/WASMImageIO-read-image.js",revision:"73a8929a8d9b2ff8facf1486f5bc184f"},{url:"itk/image-io/WASMImageIO-read-image.umd.js",revision:"a5b8d440cbcfa8c681b19bb98789da99"},{url:"itk/image-io/WASMImageIO-write-image.js",revision:"09ebb9ad2b0712c24b382890a1ade224"},{url:"itk/image-io/WASMImageIO-write-image.umd.js",revision:"09bd308160e406eab32bedee48ac205f"},{url:"itk/image-io/WASMZstdImageIO-read-image.js",revision:"b73e2f72c0bdcb89482426b034de4fbc"},{url:"itk/image-io/WASMZstdImageIO-read-image.umd.js",revision:"6f74ca97f737d6d96be4b5626cb405ee"},{url:"itk/image-io/WASMZstdImageIO-write-image.js",revision:"7ff4a4dd4b6198939580fbf1b18ee92c"},{url:"itk/image-io/WASMZstdImageIO-write-image.umd.js",revision:"78f243995cfe99051a5be3c9a3d1a8d9"},{url:"itk/image-io/compress-stringify.js",revision:"f863c6bf85c4bd8957e89aadb5d58248"},{url:"itk/image-io/compress-stringify.umd.js",revision:"4c8d740c148fdec4f8fa94b7bfdb685a"},{url:"itk/image-io/index.js",revision:"8691558457bebac75c4da487e9a8d234"},{url:"itk/image-io/parse-string-decompress.js",revision:"a985b6109d255825ee491df2317a0da2"},{url:"itk/image-io/parse-string-decompress.umd.js",revision:"caab4954a1f541200f2dc980a50ca585"},{url:"itk/image-io/read-dicom-tags.js",revision:"1e620a8cd5c73f4a7d3bcfd53cf8becd"},{url:"itk/image-io/read-dicom-tags.umd.js",revision:"1e9cc4a49825e60f7a233dbfee9db6ff"},{url:"itk/image-io/read-image-dicom-file-series.js",revision:"6d698e97d7814bb5a48b406f9fd04151"},{url:"itk/image-io/read-image-dicom-file-series.umd.js",revision:"ffdecf0c6e3516236b2eed3f35cdf126"},{url:"itk/mesh-io/BYUMeshIO-read-mesh.js",revision:"8ff44db8a729a6b6a3738269230ebe48"},{url:"itk/mesh-io/BYUMeshIO-read-mesh.umd.js",revision:"564a9aeb105353ca2a7456ab16403f89"},{url:"itk/mesh-io/BYUMeshIO-write-mesh.js",revision:"b593897ba35be4d30fa731808b53aa5f"},{url:"itk/mesh-io/BYUMeshIO-write-mesh.umd.js",revision:"ded242dacfb41ada594f51a6d76ef89b"},{url:"itk/mesh-io/FreeSurferAsciiMeshIO-read-mesh.js",revision:"199933cc483a7f6235283a6a75553345"},{url:"itk/mesh-io/FreeSurferAsciiMeshIO-read-mesh.umd.js",revision:"c5f6e8c9312f975e965f31a7fdf197fd"},{url:"itk/mesh-io/FreeSurferAsciiMeshIO-write-mesh.js",revision:"debaa92e415f628d4a63a6baf76987d2"},{url:"itk/mesh-io/FreeSurferAsciiMeshIO-write-mesh.umd.js",revision:"845dffc99d742df1897a9b52858d236a"},{url:"itk/mesh-io/FreeSurferBinaryMeshIO-read-mesh.js",revision:"713105a9b231dbb85bd5a97bdee40d5f"},{url:"itk/mesh-io/FreeSurferBinaryMeshIO-read-mesh.umd.js",revision:"fd3c5ac35475de4effe3790a07d1286e"},{url:"itk/mesh-io/FreeSurferBinaryMeshIO-write-mesh.js",revision:"e5dc5484476f482c30a857bf107b5896"},{url:"itk/mesh-io/FreeSurferBinaryMeshIO-write-mesh.umd.js",revision:"0ad806dee38d84f6b78efe657c399a40"},{url:"itk/mesh-io/OBJMeshIO-read-mesh.js",revision:"c40ea245e837947012871d85efe2b3e4"},{url:"itk/mesh-io/OBJMeshIO-read-mesh.umd.js",revision:"8e012d909cb3a0c697591bcb650757b5"},{url:"itk/mesh-io/OBJMeshIO-write-mesh.js",revision:"85864bc1515e88c5723e30681b3e315e"},{url:"itk/mesh-io/OBJMeshIO-write-mesh.umd.js",revision:"a52782b3596759c329ec8030e7dfe5c5"},{url:"itk/mesh-io/OFFMeshIO-read-mesh.js",revision:"7bf90e17975d52aa76a7fd7b06f754e3"},{url:"itk/mesh-io/OFFMeshIO-read-mesh.umd.js",revision:"7c5a79f9bc788295f53c2be73cb7eb69"},{url:"itk/mesh-io/OFFMeshIO-write-mesh.js",revision:"3278721a44463093d07f3fd60a28eb0c"},{url:"itk/mesh-io/OFFMeshIO-write-mesh.umd.js",revision:"c2aa259be0837fa8361d834127424701"},{url:"itk/mesh-io/STLMeshIO-read-mesh.js",revision:"2bc2a51bc6321c907ab0eb7b78868738"},{url:"itk/mesh-io/STLMeshIO-read-mesh.umd.js",revision:"40a15c9955f8ea46a26011f913f75324"},{url:"itk/mesh-io/STLMeshIO-write-mesh.js",revision:"ff4231d5b85202f7d05e93e94cd2605d"},{url:"itk/mesh-io/STLMeshIO-write-mesh.umd.js",revision:"7077badd57a0cfb09f813b77cf01f76f"},{url:"itk/mesh-io/SWCMeshIO-read-mesh.js",revision:"b1efe7b8460507394330ee690be19bc8"},{url:"itk/mesh-io/SWCMeshIO-read-mesh.umd.js",revision:"9125b6651876651c166c3f16533fdebc"},{url:"itk/mesh-io/SWCMeshIO-write-mesh.js",revision:"ea04672f9d62bf18ed5862ca6216fcf8"},{url:"itk/mesh-io/SWCMeshIO-write-mesh.umd.js",revision:"156f7c706022e8a3c5660b01febae232"},{url:"itk/mesh-io/VTKPolyDataMeshIO-read-mesh.js",revision:"abbf25255a1ece5536467b82cd43391c"},{url:"itk/mesh-io/VTKPolyDataMeshIO-read-mesh.umd.js",revision:"15837639c5f4add62d52eac909682bff"},{url:"itk/mesh-io/VTKPolyDataMeshIO-write-mesh.js",revision:"48761ee8cc6d51aa3a3b759806c68d35"},{url:"itk/mesh-io/VTKPolyDataMeshIO-write-mesh.umd.js",revision:"779fea1a4cd01fffb502c4059a0fa438"},{url:"itk/mesh-io/WASMMeshIO-read-mesh.js",revision:"40d09659a8ebd0194303759739631a6b"},{url:"itk/mesh-io/WASMMeshIO-read-mesh.umd.js",revision:"bc990f285f84fe3840e50caf93aba5a0"},{url:"itk/mesh-io/WASMMeshIO-write-mesh.js",revision:"19a9d52ee95bd570c6414cb9a7364653"},{url:"itk/mesh-io/WASMMeshIO-write-mesh.umd.js",revision:"adb17df30b5d8b8120dc591c3ed05def"},{url:"itk/mesh-io/WASMZstdMeshIO-read-mesh.js",revision:"193c7023fd086c046d70ae5c9da252b8"},{url:"itk/mesh-io/WASMZstdMeshIO-read-mesh.umd.js",revision:"628e04a50eb17b3b83a3e19d3d1eaa47"},{url:"itk/mesh-io/WASMZstdMeshIO-write-mesh.js",revision:"323992f124b8d7619c9d408f853ba909"},{url:"itk/mesh-io/WASMZstdMeshIO-write-mesh.umd.js",revision:"4d4d28a7285d86ea72e1086d2032fa28"},{url:"itk/mesh-io/index.js",revision:"42e289049b54466b634c99bb6786a5c7"},{url:"itk/mesh-io/mesh-to-polydata.js",revision:"b60c57670e8115392a24c4cbd7800d9f"},{url:"itk/mesh-io/mesh-to-polydata.umd.js",revision:"16591b66c211ef6390320fe286403651"},{url:"itk/mesh-io/polydata-to-mesh.js",revision:"858c0ea2abd9b14143a5a5a6b414b921"},{url:"itk/mesh-io/polydata-to-mesh.umd.js",revision:"05a32d3ef50a30b79874eecfaf4571a7"},{url:"itk/pipeline/BloscZarr.js",revision:"b977fdc9a3e1dc2449fa74b5edd6ab1b"},{url:"itk/pipeline/BloscZarr.umd.js",revision:"609f4d40fe1ec5dd56c958b64d0888cc"},{url:"itk/pipeline/Downsample.js",revision:"014c5d2ccc144ed1103bfd981a30e6e2"},{url:"itk/pipeline/Downsample.umd.js",revision:"169ec3d0d1a837f5719bb267223d4096"},{url:"itk/pipeline/DownsampleLabelImage.js",revision:"81b97f3b614a4405388e4b7b654c95ee"},{url:"itk/pipeline/DownsampleLabelImage.umd.js",revision:"f9587cb2b9747777dd6aff190de7b609"},{url:"itk/pipeline/ResampleLabelImage.js",revision:"b0383c048b988f1ca45c1ef7cdc88eea"},{url:"itk/pipeline/ResampleLabelImage.umd.js",revision:"66ca6ef62755a20f823b32e74ab04cfb"},{url:"itk/web-workers/IOInput.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/ITKConfig.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/RunPipelineInput.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/WebWorkerInput.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/bundles/pipeline.min.worker.js",revision:"622621b79daf1788cfb774a0164b6f13"},{url:"itk/web-workers/bundles/pipeline.worker.js",revision:"8bd2ebf7c0ee7e48779dbc2884446b1c"},{url:"itk/web-workers/loadImageIOPipelineModule.js",revision:"083b7f359cb4a80010f2f030ff512805"},{url:"itk/web-workers/loadMeshIOPipelineModule.js",revision:"d58b1bfbc28c29390aad0cd53d20d659"},{url:"itk/web-workers/loadPipelineModule.js",revision:"6fe0cc1fb1e78a669383684c3a59be6e"},{url:"itk/web-workers/min-bundles/pipeline.worker.js",revision:"3a03d1eb9e78db7ff098aa0469b955fd"},{url:"itk/web-workers/pipeline.worker.js",revision:"ced706a079e9f2126ea3c32ebe709c62"},{url:"itk/web-workers/runPipeline.js",revision:"01b4ef63574db0600aa6f38718a0de5d"},{url:"itkVtkViewer.js",revision:"426a126ef40780e849740777c8b9eba4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/(\.js|\.png|\.wasm)$/,new e.StaleWhileRevalidate({cacheName:"itk-vtk-viewer-StaleWhileRevalidate",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:1209600})]}),"GET")}));
//# sourceMappingURL=serviceWorker.js.map
