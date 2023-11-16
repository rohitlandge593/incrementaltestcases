namespace dotnetapp.Models
{
    public class Team 
    {
        public int TeamId{get;set;}
        [Required(ErrorMessage="Name is Required")]
        public string Name{get;set;}
    }    

}
