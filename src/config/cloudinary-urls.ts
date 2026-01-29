/**
 * Cloudinary Image URL Mapping
 * 
 * Updated with actual Cloudinary filenames from dj76bnpni account.
 */

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dj76bnpni/image/upload';

// Helper function to build URL with transformations
function cloudinary(filename: string, transform: string = 'f_auto,q_auto') {
  // Extract version from filename if present, otherwise use a default version
  const version = 'v1769448783'; // Default version from uploads
  return `${CLOUDINARY_BASE}/${transform}/${version}/${filename}`;
}

/**
 * CLOUDINARY IMAGE MAPPINGS
 * 
 * Format: originalFilename: cloudinaryFilename
 */

// ============================================
// LOGOS & BRANDING
// ============================================
export const LogoURLs = {
  whiteLogo: cloudinary('CFSC-LogoV2_-_White_q47q40.png', 'f_auto,q_auto,w_600'),
};

// ============================================
// FAVICON
// ============================================
export const FaviconURLs = {
  favicon: 'https://res.cloudinary.com/dj76bnpni/image/upload/v1769448802/favicon_bsp7ci.ico',
  favicon16: 'https://res.cloudinary.com/dj76bnpni/image/upload/v1769448802/favicon-16x16_kh5bms.png',
  favicon32: 'https://res.cloudinary.com/dj76bnpni/image/upload/v1769448808/favicon-32x32_cqeth4.png',
  favicon96: 'https://res.cloudinary.com/dj76bnpni/image/upload/v1769448806/favicon-96x96_mlcwug.png',
  appleIcon: 'https://res.cloudinary.com/dj76bnpni/image/upload/v1769448803/apple-icon_mhrwgf.png',
  appleIcon120: 'https://res.cloudinary.com/dj76bnpni/image/upload/v1769448807/apple-icon-120x120_hs3hcc.png',
};

// ============================================
// MODELS - PICCOLO
// ============================================
export const PiccoloURLs = {
  // Exteriors - Dark
  darkExterior1: cloudinary('CFS-Piccolo-Dark-Exterior-2_p5ewht.jpg', 'f_auto,q_90,w_1200'),
  darkExterior2: cloudinary('CFS-Piccolo-Dark-Exterior-6-2023-08-02_wmaklr.jpg', 'f_auto,q_auto,w_800'),
  darkExterior3: cloudinary('CFS-Piccolo-East-Entry-Dark-Exterior-1-2023-09-07_nk09ie.jpg', 'f_auto,q_auto,w_800'),
  
  // Exteriors - Light
  lightExterior1: cloudinary('CFS-Piccolo-Light-Exterior-3-2023-08-02_vhmtwn.jpg', 'f_auto,q_auto,w_800'),
  lightExterior2: cloudinary('CFS-Piccolo-Light-Exterior-5-2023-08-02_xtbdeh.jpg', 'f_auto,q_auto,w_800'),
  lightExterior3: cloudinary('CFS-Piccolo-East-Entry-Light-Exterior-1-2023-09-07_ypqbdn.jpg', 'f_auto,q_auto,w_800'),
  
  // Interiors - Dark
  darkInterior1: cloudinary('CFS-Piccolo-Dark-Interior-2-2023-08-02_cycauj.jpg', 'f_auto,q_auto,w_800'),
  darkInterior2: cloudinary('CFS-Piccolo-Dark-Interior-3-2023-08-02_yfivsg.jpg', 'f_auto,q_auto,w_800'),
  darkInteriorBedroom: cloudinary('CFS-Piccolo-Dark-Interior-Bedroom-2023-08-02_cvd9mx.jpg', 'f_auto,q_auto,w_800'),
  
  // Interiors - Light
  lightInterior1: cloudinary('CFS-Piccolo-Light_Interior-1-2023-08-02_azkeq7.jpg', 'f_auto,q_auto,w_800'),
  lightInteriorBathroom1: cloudinary('CFS-Piccolo-Light-Interior-Bathroom-1-2023-08-02_ruiouc.jpg', 'f_auto,q_auto,w_800'),
  lightInteriorBathroom2: cloudinary('CFS-Piccolo-Light-interior-Bathroom-2-2023-08-02_sepvsm.jpg', 'f_auto,q_auto,w_800'),
  lightInteriorBedroom: cloudinary('CFS-Piccolo-Light-Interior-Bedroom-1-2023-08-02_jqptjx.jpg', 'f_auto,q_auto,w_800'),
  
  // Floor Plan
  floorPlan: cloudinary('PICCOLO-FLOOR-PLAN_rt8yjr.jpg', 'f_auto,q_90,w_1200'),
};

// ============================================
// MODELS - MEDIO
// ============================================
export const MedioURLs = {
  // Exteriors - Dark
  darkExterior1: cloudinary('Medio-Dark-Exterior-2_at6ixs.jpg', 'f_auto,q_90,w_1200'),
  darkExterior2: cloudinary('Medio-Dark-Exterior-4_yeejrd.jpg', 'f_auto,q_auto,w_800'),
  
  // Exteriors - Light
  lightExterior1: cloudinary('Medio-Light-Exterior-4_aady6u.jpg', 'f_auto,q_auto,w_800'),
  lightExterior2: cloudinary('Medio-Light-Exterior-5_tcbqso.jpg', 'f_auto,q_auto,w_800'),
  
  // Interiors - Dark
  darkInterior3: cloudinary('Medio-Dark-Interior-3_mciuc3.jpg', 'f_auto,q_auto,w_1920'), // Hero image
  darkInterior5: cloudinary('Medio-Dark-Interior-5_ylqqdc.jpg', 'f_auto,q_auto,w_1920'),
  darkInterior7: cloudinary('Medio-Dark-Interior-7_mumds1.jpg', 'f_auto,q_auto,w_1920'),
  
  // Interiors - Light
  lightInterior2: cloudinary('Medio-Light-Interior-2_dv2a2c.jpg', 'f_auto,q_auto,w_1920'),
  lightInterior3: cloudinary('Medio-Light-Interior-3_jquvjv.jpg', 'f_auto,q_auto,w_1920'),
  lightInterior4Bedroom: cloudinary('Medio-Light-Interior-4-Bedroom_ytwtot.jpg', 'f_auto,q_auto,w_1920'),
  bathroom: cloudinary('Medio-Bathroom_dpbmvr.jpg', 'f_auto,q_auto,w_1920'),
  
  // Floor Plan
  floorPlan: cloudinary('MEDIO-FLOOR-PLAN_ehumnr.jpg', 'f_auto,q_90,w_1200'),
};

// ============================================
// LEARNING CENTER
// ============================================
export const LearningCenterURLs = {
  steelVsWood: cloudinary('Steel_vs._Wood-_Full_Breakdown_pudbei.jpg', 'f_auto,q_auto,w_800'),
  costDrivers: cloudinary('What_Drives_the_Cost_of_Your_Build_okycsx.jpg', 'f_auto,q_auto,w_800'),
  johnMontgomery: cloudinary('John_Montgomery_wczbay.jpg', 'f_auto,q_auto,w_400'),
  marcReynolds: cloudinary('Marc_Reynolds_vaufxe.jpg', 'f_auto,q_auto,w_400'),
  factoryWallPanels: cloudinary('Wall_panels_engineered_and_assembled_in_our_factory_ykjkmc.jpg', 'f_auto,q_auto,w_800'),
  framecad: cloudinary('FrameCAD_u0n12h.jpg', 'f_auto,q_auto,w_800'),
  framecadPartner: cloudinary('FrameCAD_Partner_mafomc.webp', 'f_auto,q_auto,w_800'),
  labeledPanels: cloudinary('Each_panel_is_labeled_and_numbered_for_easy_onsite_assembly_pfwenk.jpg', 'f_auto,q_auto,w_800'),
  galvanizedSteel: cloudinary('Galvanized_steel_features_a_zinc_coating_that_creates_a_protective_barrier_against_moisture_and_oxygen_cdyczy.jpg', 'f_auto,q_auto,w_800'),
  coldFormedSteel: cloudinary('Cold_formed_steel_framing_is_engineered_to_last_for_decades_in_Canadian_climates_e9eekf.jpg', 'f_auto,q_auto,w_800'),
};

// ============================================
// TEAM PHOTOS
// ============================================
export const TeamURLs = {
  johnMontgomery: cloudinary('John_Montgomery_dfkkaj.png', 'f_auto,q_auto,w_400'),
  marcReynolds: cloudinary('Marc_Reynolds_zqhgvl.jpg', 'f_auto,q_auto,w_400'),
};

// ============================================
// SUCCESS STORIES
// ============================================
export const SuccessStoriesURLs = {
  // Steel-Built Barndo Retreat (Ste-Marthe)
  steMartheCompleted: cloudinary('Completed_Barndominium_psy77h.png', 'f_auto,q_auto,w_1920'),
  steMartheFoundation: cloudinary('Foundation_and_Steel_Frame_Installation_bpehk6.jpg', 'f_auto,q_auto,w_800'),
  steMartheExteriorCladding: cloudinary('Exterior_Cladding_Installation_guuicl.jpg', 'f_auto,q_auto,w_800'),
  steMartheSteelStructure: cloudinary('Steel_Structure_Complete_ovkuvr.jpg', 'f_auto,q_auto,w_800'),
  
  // Blue Mountain Steel Workshop
  blueMountainCompleted: cloudinary('Completed_Steel_Building_-_Final_Result_jwkth6.png', 'f_auto,q_auto,w_800'),
  
  // Family Barndominium (Bonfield)
  bonfieldBarndo: cloudinary('Family_Barndominium_xl5mwy.png', 'f_auto,q_auto,w_800'),
  bonfieldInteriorFrame: cloudinary('Interior_Frame_Structure_Complete_hpe2kb.png', 'f_auto,q_auto,w_800'),
  bonfieldWinterConstruction: cloudinary('Winter_Construction_cwez0y.png', 'f_auto,q_auto,w_800'),
  bonfieldLivingArea: cloudinary('Living_Area_with_Energy-Efficient_Insulation_qpi4hw.png', 'f_auto,q_auto,w_800'),
  bonfieldSteelRoof: cloudinary('Steel_Roof_Frame_Assembly_pckekb.png', 'f_auto,q_auto,w_800'),
  bonfieldOpenFloor: cloudinary('Open_Floor_Plan_-_4_000_sq_ft_Interior_bebyho.png', 'f_auto,q_auto,w_800'),
  bonfieldCathedralCeilings: cloudinary('Cathedral_Ceilings_-_Spray_Foam_Insulation_kbzyqv.png', 'f_auto,q_auto,w_800'),
  
  // Dual-Structure Barndominium + Garage (Pownal)
  pownalDualStructure: cloudinary('Dual_Structures_-_Barndominium_Garage_Complete_hn5rdl.png', 'f_auto,q_auto,w_800'),
  pownalCanadianMade: cloudinary('100_Canadian_Made_-_SteelBuilt_Quality_dbrika.png', 'f_auto,q_auto,w_800'),
  pownalSteelFrameProgress: cloudinary('Steel_Frame_Construction_Progress_we685k.png', 'f_auto,q_auto,w_800'),
  pownalDualFinished: cloudinary('Dual-Structure_Barndominium_-_Finished_hhmvp9.jpg', 'f_auto,q_auto,w_800'),
  pownalSimultaneousConstruction: cloudinary('Dual_Structures_-_Simultaneous_Construction_h98ert.png', 'f_auto,q_auto,w_800'),
  pownalInteriorProgress: cloudinary('Interior_Progress_-_Open-Concept_Living_Space_gdxbev.png', 'f_auto,q_auto,w_800'),
  pownalSteelRoofAssembly: cloudinary('Steel_Frame_Roof_Assembly_jubfgi.png', 'f_auto,q_auto,w_800'),
  pownalOceanViews: cloudinary('Panoramic_Ocean_Coastal_Views_jpvffc.png', 'f_auto,q_auto,w_800'),
  pownalSteelColumn: cloudinary('Precision_Steel_Column_Installation_vombhp.png', 'f_auto,q_auto,w_800'),
  pownalFoundation: cloudinary('Foundation_Work_in_Progress_c0pqao.png', 'f_auto,q_auto,w_800'),
  pownalFullProperty: cloudinary('Full_Property_View_-_Both_Structures_Showcased_j0g451.png', 'f_auto,q_auto,w_800'),
  pownalTeamOnSite: cloudinary('SteelBuilt_Team_On-Site_Assembly_inbbvi.png', 'f_auto,q_auto,w_800'),
  pownalWaterfrontViews: cloudinary('Breathtaking_PEI_Waterfront_Views_kwdcur.png', 'f_auto,q_auto,w_800'),
  
  // Barndominium Kit Design and Delivery
  barndominiumKitDesign: cloudinary('Barndominium_Kit_Design_and_Delivery_xhtdhy.png', 'f_auto,q_auto,w_800'),
  barndominiumKitPrecisionSteel: cloudinary('Precision_Steel_Ceiling_Framework_jzl9zo.png', 'f_auto,q_auto,w_800'),
  barndominiumKitProjectNearing: cloudinary('Project_Nearing_Completion_hx5zji.jpg', 'f_auto,q_auto,w_800'),
  barndominiumKitWallPanel: cloudinary('Wall_Panel_Installation_Progress_cbcmpk.png', 'f_auto,q_auto,w_800'),
  barndominiumKitSteelFrame: cloudinary('Steel_Frame_Structure_with_Mezzanine_pasitd.png', 'f_auto,q_auto,w_800'),
  barndominiumKitTwoStoryWindow: cloudinary('Two-Story_Window_Installation_ohdlrw.png', 'f_auto,q_auto,w_800'),
  barndominiumKitNaturalLight: cloudinary('Natural_Light_and_Open_Space_v53zd6.png', 'f_auto,q_auto,w_800'),
  barndominiumKitCompleted: cloudinary('Completed_Barndominium_at_Dusk_lskfuv.png', 'f_auto,q_auto,w_800'),
  
  // Marvelous Barndominium for Northern Living (Sudbury)
  sudburyBarndo: cloudinary('Marvelous_Barndominium_for_Northern_Living_gzvllk.png', 'f_auto,q_auto,w_800'),
  sudburyMonoslopeFrame: cloudinary('Monoslope_Steel_Frame_Taking_Shape_s7yxhr.png', 'f_auto,q_auto,w_800'),
  sudburyExteriorCladding: cloudinary('Exterior_Cladding_Installation_bnugty.png', 'f_auto,q_auto,w_800'),
  sudburyExteriorSide: cloudinary('Exterior_Side_Taking_Shape_colbzk.png', 'f_auto,q_auto,w_800'),
  sudburyMonoslopeDesign: cloudinary('Monoslope_Design_with_Fall_Colors_t2cxs3.png', 'f_auto,q_auto,w_800'),
  sudburyWindowInstallation: cloudinary('Window_Installation_Progress_zfcirn.png', 'f_auto,q_auto,w_800'),
  sudburyRebarFoundation: cloudinary('Rebar_and_Concrete_Foundation_Detail_p1j9c5.png', 'f_auto,q_auto,w_800'),
  sudburyFoundationPour: cloudinary('Foundation_Pour_with_Site_Preparation_l7ujqn.png', 'f_auto,q_auto,w_800'),
  
  // Modern Two-Story Barndominium (Prince Edward County)
  princeEdwardBarndo: cloudinary('Two-Tone_Blue_Exterior_with_Windows_ighs41.png', 'f_auto,q_auto,w_800'),
  princeEdwardFoundation: cloudinary('Foundation_Ready_for_Steel_Frame_s3c5im.png', 'f_auto,q_auto,w_800'),
  princeEdwardSteelFrame: cloudinary('Two-Story_Steel_Frame_Taking_Shape_cppxd7.png', 'f_auto,q_auto,w_800'),
  princeEdwardCompleted: cloudinary('Completed_Exterior_Ready_qomdoc.png', 'f_auto,q_auto,w_800'),
  princeEdwardBlueSteel: cloudinary('Blue_Steel_Exterior_with_Openings_iry2hm.png', 'f_auto,q_auto,w_800'),
  
  // Barndominium Project in Fort Erie
  fortErieBarndo: cloudinary('Completed_Fort_Erie_Barndominium_ch3cqh.jpg', 'f_auto,q_auto,w_800'),
  fortErieSteelFrameInterior: cloudinary('Steel_Frame_Interior_Progress_uk0sn5.jpg', 'f_auto,q_auto,w_800'),
  fortErieRadiantFloor: cloudinary('Radiant_Floor_Heating_Installation_c01noa.jpg', 'f_auto,q_auto,w_800'),
  fortErieSteelFrameErection: cloudinary('Steel_Frame_Erection_in_Progress_ctsip9.jpg', 'f_auto,q_auto,w_800'),
  fortErieCompleteFrame: cloudinary('Complete_Steel_Frame_Structure_rigsol.jpg', 'f_auto,q_auto,w_800'),
  fortErieVaultedCeiling: cloudinary('Vaulted_ceiling_gable_detail_and_wrap-around_covered_porch_design_box8sp.jpg', 'f_auto,q_auto,w_800'),
  fortErieExteriorPorch: cloudinary('Exterior_with_Covered_Porch_gay5kg.jpg', 'f_auto,q_auto,w_800'),
  fortErieCoveredPorch: cloudinary('Full-length_covered_porch_with_wood_post_accents_and_modern_black_siding_zgvoek.jpg', 'f_auto,q_auto,w_800'),
  fortErieFoundationFootings: cloudinary('Custom_Engineered_Foundation_Footings_iydarm.jpg', 'f_auto,q_auto,w_800'),
  fortErieFrontEntrance: cloudinary('Front_Entrance_Porch_Details_e45unr.jpg', 'f_auto,q_auto,w_800'),
  fortErieSteelFrameFoundation: cloudinary('Steel_Frame_on_Foundation_mgfg0z.jpg', 'f_auto,q_auto,w_800'),
  fortErieExteriorSiding: cloudinary('Exterior_Siding_Installation_vqsto8.jpg', 'f_auto,q_auto,w_800'),
  fortErieCoveredPorchProgress: cloudinary('Covered_Porch_Construction_Progress_wdv36y.jpg', 'f_auto,q_auto,w_800'),
  fortErieVaultedInterior: cloudinary('Vaulted_Ceiling_Interior_Views_kdpat8.jpg', 'f_auto,q_auto,w_800'),
  fortErieCoveredPorchLiving: cloudinary('Covered_Porch_Living_Space_vbzhcs.jpg', 'f_auto,q_auto,w_800'),
  fortErieOpenConcept: cloudinary('Open-Concept_Space_Taking_Shape_yf55ux.jpg', 'f_auto,q_auto,w_800'),
  
  // Sister Barndominiums (Mossley)
  mossleyBarndos: cloudinary('Sister_Barndominiums_ot7zmg.jpg', 'f_auto,q_auto,w_800'),
  mossleySteelFraming: cloudinary('Steel_framing_is_protected_by_multiple_layers_of_insulation_and_moisture_barriers_fepsdw.jpg', 'f_auto,q_auto,w_800'),
  mossleyOpenLiving: cloudinary('Open_Living_Space_de4gzz.jpg', 'f_auto,q_auto,w_800'),
  mossleyFoundation: cloudinary('Foundation_Work_Underway_bicpvt.jpg', 'f_auto,q_auto,w_800'),
  mossleyLightFilled: cloudinary('Light-Filled_Living_dywdnw.jpg', 'f_auto,q_auto,w_800'),
  mossleyModernKitchen: cloudinary('Modern_Kitchen_Design_r0h05c.jpg', 'f_auto,q_auto,w_800'),
  mossleyReadyToBuild: cloudinary('Ready_to_Build_gaolys.jpg', 'f_auto,q_auto,w_800'),
  mossleyMaterialsArrive: cloudinary('Materials_Arrive_zr3ojk.jpg', 'f_auto,q_auto,w_800'),
  mossleyFrameAssembly: cloudinary('Frame_Assembly_in_Action_mskfiy.jpg', 'f_auto,q_auto,w_800'),
  mossleyCustomStaircase: cloudinary('Custom_Staircase_wqrcj5.jpg', 'f_auto,q_auto,w_800'),
  mossleyRoofingSiding: cloudinary('Roofing_Siding_Progress_jnpgef.jpg', 'f_auto,q_auto,w_800'),
  mossleySteelFrameRising: cloudinary('Steel_Frame_Rising_qnsg4q.jpg', 'f_auto,q_auto,w_800'),
  mossleySitePreparation: cloudinary('Site_Preparation_trqptq.jpg', 'f_auto,q_auto,w_800'),
  mossleyCathedralCeilings: cloudinary('Cathedral_Ceilings_Take_Shape_nccobm.jpg', 'f_auto,q_auto,w_800'),
  mossleyCoveredPorch: cloudinary('Covered_Porch_Taking_Shape_rosovf.jpg', 'f_auto,q_auto,w_800'),
  mossleyWallSystems: cloudinary('Wall_Systems_Windows_ylzvzt.jpg', 'f_auto,q_auto,w_800'),
  mossleySoaringCeilings: cloudinary('Soaring_Cathedral_Ceilings_oqzhn5.jpg', 'f_auto,q_auto,w_800'),
};

// ============================================
// CONSOLIDATED EXPORTS
// ============================================

/**
 * Main image catalog using Cloudinary URLs
 */
export const CloudinaryImages = {
  logo: LogoURLs,
  favicon: FaviconURLs,
  piccolo: PiccoloURLs,
  medio: MedioURLs,
  learning: LearningCenterURLs,
  team: TeamURLs,
  successStories: SuccessStoriesURLs,
} as const;

/**
 * Quick access to commonly used images
 */
export const CommonImages = {
  // Logo
  logoWhite: LogoURLs.whiteLogo,
  
  // Hero images
  heroHome: MedioURLs.darkInterior3,
  heroSuccessStories: SuccessStoriesURLs.steMartheCompleted,
  heroAbout: SuccessStoriesURLs.steMartheCompleted,
  
  // Model cards
  piccoloCard: PiccoloURLs.darkExterior1,
  medioCard: MedioURLs.darkExterior1,
  
  // Team
  john: LearningCenterURLs.johnMontgomery,
  marc: LearningCenterURLs.marcReynolds,
} as const;