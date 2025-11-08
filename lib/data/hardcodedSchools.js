// lib/data/hardcodedSchools.js

// Temporary hardcoded school uniforms data
// This will be replaced with Supabase database later
// Structure matches future database schema for easy migration

export const hardcodedSchools = [
    {
      id: 1,
      name: "Aga Khan Higher Secondary School",
      slug: "aga-khan-school",
      location: "Skardu",
      type: "school",
      logoUrl: null, // Will be added later
      isActive: true,
      uniformSets: [
        {
          id: 1,
          name: "Boys Summer Uniform",
          gender: "boys",
          season: "summer",
          gradeRange: "Class 1-10",
          price: 1200,
          imageUrl: null, // Placeholder
          description: "Complete summer uniform set including shirt, pants, tie, and belt",
          components: ["White Shirt", "Grey Pants", "School Tie", "Black Belt"],
        },
        {
          id: 2,
          name: "Girls Winter Uniform",
          gender: "girls",
          season: "winter",
          gradeRange: "Class 1-10",
          price: 1500,
          imageUrl: null,
          description: "Complete winter uniform set with sweater and blazer",
          components: ["White Shirt", "Grey Skirt", "Navy Sweater", "School Tie"],
        },
      ],
    },
    {
      id: 2,
      name: "Karakoram International University",
      slug: "kiu-college",
      location: "Gilgit",
      type: "college",
      logoUrl: null,
      isActive: true,
      uniformSets: [
        {
          id: 3,
          name: "Boys Formal Uniform",
          gender: "boys",
          season: "all-season",
          gradeRange: "Undergraduate",
          price: 1800,
          imageUrl: null,
          description: "Professional formal uniform for college students",
          components: ["White Formal Shirt", "Black Dress Pants", "College Blazer", "Tie"],
        },
        {
          id: 4,
          name: "Girls Formal Uniform",
          gender: "girls",
          season: "all-season",
          gradeRange: "Undergraduate",
          price: 1900,
          imageUrl: null,
          description: "Elegant formal uniform with dupatta",
          components: ["White Shirt", "Black Trousers", "College Blazer", "Dupatta"],
        },
      ],
    },
    {
      id: 3,
      name: "Army Public School",
      slug: "aps-skardu",
      location: "Skardu",
      type: "school",
      logoUrl: null,
      isActive: true,
      uniformSets: [
        {
          id: 5,
          name: "Boys PT Uniform",
          gender: "boys",
          season: "summer",
          gradeRange: "Class 1-12",
          price: 900,
          imageUrl: null,
          description: "Physical training uniform for sports activities",
          components: ["PT Shirt", "PT Shorts", "Sports Shoes", "Socks"],
        },
        {
          id: 6,
          name: "Boys Regular Uniform",
          gender: "boys",
          season: "all-season",
          gradeRange: "Class 1-12",
          price: 1400,
          imageUrl: null,
          description: "Standard daily wear uniform",
          components: ["Khaki Shirt", "Khaki Pants", "School Badge", "Belt"],
        },
      ],
    },
    {
      id: 4,
      name: "Presentation Convent School",
      slug: "presentation-school",
      location: "Gilgit",
      type: "school",
      logoUrl: null,
      isActive: true,
      uniformSets: [
        {
          id: 7,
          name: "Girls Summer Dress",
          gender: "girls",
          season: "summer",
          gradeRange: "Class 1-8",
          price: 1100,
          imageUrl: null,
          description: "Comfortable summer uniform with check pattern",
          components: ["Check Dress", "White Shirt", "School Belt", "White Socks"],
        },
        {
          id: 8,
          name: "Girls Winter Dress",
          gender: "girls",
          season: "winter",
          gradeRange: "Class 1-8",
          price: 1600,
          imageUrl: null,
          description: "Warm winter uniform with cardigan",
          components: ["Winter Dress", "Navy Cardigan", "Tights", "School Scarf"],
        },
      ],
    },
  ];
  
  // Helper function to get featured uniforms (for homepage)
  export const getFeaturedUniforms = (limit = 4) => {
    const allUniforms = [];
    
    hardcodedSchools.forEach(school => {
      school.uniformSets.forEach(uniformSet => {
        allUniforms.push({
          ...uniformSet,
          schoolName: school.name,
          schoolSlug: school.slug,
          schoolLocation: school.location,
        });
      });
    });
  
    // Return first 'limit' items
    return allUniforms.slice(0, limit);
  };
  
  // Helper function to get school by slug
  export const getSchoolBySlug = (slug) => {
    return hardcodedSchools.find(school => school.slug === slug);
  };
  
  // Helper function to get all active schools
  export const getActiveSchools = () => {
    return hardcodedSchools.filter(school => school.isActive);
  };